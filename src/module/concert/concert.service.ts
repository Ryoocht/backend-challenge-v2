import { Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import PrismaProvider from 'prisma/prisma-provider';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { count } from 'console';
import { Venue } from '@prisma/client';

@Injectable()
export class ConcertService {
  private readonly prisma = PrismaProvider.getConnection();

  create(venue: Venue, createConcertDto: CreateConcertDto) {
    const concert = this.prisma.concert.create({
      data: {
        ...createConcertDto,
        venue: { connect: { id: venue.id } },
        categories: {
          create: createConcertDto.categories.map((category) => ({
            category: {
              create: {
                name: category.name,
              },
            },
          })),
        },
      },
    });
    return concert;
  }

  async findAvailableConcerts(paginationDto: PaginationDto) {
    const concerts = await this.prisma.concert.findMany({
      take: paginationDto.take,
      skip: paginationDto.take * (paginationDto.page - 1),
      where: {
        AND: [
          {
            date: { gte: new Date() },
          },
          {
            capacity: {
              gt: {
                count: {
                  select: {
                    id: true,
                  },
                },
              } as any,
            },
          },
        ],
      },
      orderBy: {
        date: 'asc',
      },
    });

    return concerts;
  }

  async update(
    venue: Venue,
    concertId: string,
    updateConcertDto: UpdateConcertDto,
  ) {
    // const categories = updateConcertDto.categories ?? [];

    // const updatedCategories = await Promise.all([
    //   categories.map(async (category) => {
    //     const { name } = category;
    //     return this.prisma.category.update({
    //        where: { }
    //     })
    //   }),
    // ]);
    const updatedConcert = await this.prisma.concert.update({
      where: { id: concertId },
      data: {
        ...updateConcertDto,
        venue: {
          connect: { id: venue.id },
        },
        categories: {
          // connectOrCreate: updateConcertDto.categories.map(category => ({
          //   where: {
          //     concertId_categoryId: category.name,
          //   }
          // }))
        },
      },
      include: {
        venue: true,
      },
    });
    return updatedConcert;
  }

  findOne(concertId: string) {
    const concert = this.prisma.concert.findUnique({
      where: { id: concertId },
    });
    return concert;
  }
}
