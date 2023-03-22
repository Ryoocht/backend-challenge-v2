import { Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import PrismaProvider from 'prisma/prisma-provider';
import { ConcertListDto } from './dto/concert-list.dto';

@Injectable()
export class ConcertService {
  private readonly prisma = PrismaProvider.getConnection();

  async create(venueId: string, createConcertDto: CreateConcertDto) {
    const categoryUniqueInputs = createConcertDto.categories.map(
      (category) => ({ name: category.name }),
    );

    const categoriesData = await this.prisma.category.findMany({
      where: { OR: categoryUniqueInputs },
    });

    const categoryIds = categoriesData.map((category) => ({ id: category.id }));

    const concert = this.prisma.concert.create({
      data: {
        ...createConcertDto,
        venue: { connect: { id: venueId } },
        categories: {
          create: categoryIds.map((categoryId) => ({
            category: { connect: categoryId },
          })),
        },
      },
    });
    return concert;
  }

  async findAll(concertListDto: ConcertListDto) {
    const { take, page, title, date, category } = concertListDto;
    const concerts = await this.prisma.concert.findMany({
      take,
      skip: take * (page - 1),
      where: {
        title: {
          contains: title,
        },
        date: date ? { equals: new Date(date) } : undefined,
        categories: {
          some: {
            category: {
              name: {
                contains: category,
              },
            },
          },
        },
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    return concerts;
  }

  async update(
    venueId: string,
    concertId: string,
    updateConcertDto: UpdateConcertDto,
  ) {
    const categoryUniqueInputs = updateConcertDto.categories.map(
      (category) => ({ name: category.name }),
    );
    const categoriesData = await this.prisma.category.findMany({
      where: { OR: categoryUniqueInputs },
    });
    const categoryIds = categoriesData.map((category) => ({ id: category.id }));

    const concert = await this.prisma.concert.update({
      where: { id: concertId },
      data: {
        ...updateConcertDto,
        venue: { connect: { id: venueId } },
        categories: {
          disconnect: updateConcertDto.categories ? [] : undefined,
          connectOrCreate: categoryIds.map((categoryId) => ({
            where: {
              concertId_categoryId: { concertId, categoryId: categoryId.id },
            },
            create: { category: { connect: { id: categoryId.id } } },
          })),
        },
      },
      include: { categories: true },
    });

    return concert;
  }

  findOne(concertId: string) {
    const concert = this.prisma.concert.findUnique({
      where: { id: concertId },
      include: { bookings: true },
    });
    return concert;
  }
}
