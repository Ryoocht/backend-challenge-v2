import { Injectable } from '@nestjs/common';
import PrismaProvider from 'prisma/prisma-provider';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { User } from '@prisma/client';
@Injectable()
export class BookingsService {
  private readonly prisma = PrismaProvider.getConnection();
  create(userId: string, concertId: string) {
    const booking = this.prisma.booking.create({
      data: {
        userId,
        concertId,
      },
    });
    return booking;
  }

  getBookedConcerts(user: User, pagination: PaginationDto) {
    const bookings = this.prisma.booking.findMany({
      take: pagination.take,
      skip: pagination.take * (pagination.page - 1),
      where: {
        userId: user.id,
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
