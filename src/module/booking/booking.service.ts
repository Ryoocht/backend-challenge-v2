import { BadRequestException, Injectable } from '@nestjs/common';
import PrismaProvider from 'prisma/prisma-provider';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { ConcertService } from '../concert/concert.service';
@Injectable()
export class BookingsService {
  private readonly prisma = PrismaProvider.getConnection();
  constructor(private readonly concertService: ConcertService) {}

  async create(userId: string, concertId: string) {
    const concert = await this.concertService.findOne(concertId);

    if (!concert) {
      throw new BadRequestException('Concert not found');
    }

    if (concert.capacity <= concert.bookings.length) {
      throw new BadRequestException('Concert has reached capacity');
    }

    const booking = this.prisma.booking.create({
      data: {
        userId,
        concertId,
      },
    });
    return booking;
  }

  getBookedConcerts(userId: string, pagination: PaginationDto) {
    const bookings = this.prisma.booking.findMany({
      take: pagination.take,
      skip: pagination.take * (pagination.page - 1),
      where: {
        userId: userId,
      },
      include: {
        concert: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
    return bookings;
  }
}
