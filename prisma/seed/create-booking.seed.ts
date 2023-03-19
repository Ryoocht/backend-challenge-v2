import PrismaProvider from '../prisma-provider';
import { BOOKING_DATA } from './data/booking.data';

const prisma = PrismaProvider.getConnection();

async function createBookingSeedData() {
  for (const booking of BOOKING_DATA) {
    await prisma.booking.create({
      data: {
        ...booking,
      },
    });
  }
}

export default createBookingSeedData;
