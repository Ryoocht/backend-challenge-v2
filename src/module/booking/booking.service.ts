import { Injectable } from '@nestjs/common';
import PrismaProvider from 'prisma/prisma-provider';
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

  findAll() {
    return `This action returns all bookings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
