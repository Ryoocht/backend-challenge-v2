import { Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import PrismaProvider from 'prisma/prisma-provider';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { count } from 'console';

@Injectable()
export class ConcertService {
  private readonly prisma = PrismaProvider.getConnection();

  create(createConcertDto: CreateConcertDto) {
    const concert = this.prisma.concert.create({
      data: {
        ...createConcertDto,
        categories: {
          create: createConcertDto.categories.map((category) => ({
            category: {
              create: {
                name: category.name,
              },
            },
          })),
        },
        venueId: 'f9f623c8-05b7-4c28-9db3-bf20739139fe',
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

  findBookedConcerts(userId: string) {
    const concerts = this.prisma.booking.findMany({
      where: { userId },
      select: {
        concert: true,
      },
    });
    return concerts;
  }

  findOne(id: number) {
    return `This action returns a #${id} concert`;
  }

  async update(id: string, updateConcertDto: UpdateConcertDto) {
    const categories = updateConcertDto.categories.map((category) => ({
      where: { name: category.name },
      create: { name: category.name },
    }));

    const concert = await this.prisma.concert.update({
      where: { id },
      data: {
        ...updateConcertDto,
        categories: { connectOrCreate: categories },
      },
    });

    return concert;
    // const concert = await this.prisma.concert.update({
    //   where: {
    //     id,
    //   },
    //   data: {
    //     ...updateConcertDto,
    //     categories: {
    //       connectOrCreate: updateConcertDto.categories.map((category) => ({
    //         where: {
    //           name: category.name,
    //         },
    //         create: {
    //           name: category.name,
    //         },
    //       })),
    //     },
    //   },
    // });

    // return concert;
  }

  remove(id: number) {
    return `This action removes a #${id} concert`;
  }
}
