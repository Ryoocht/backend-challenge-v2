import PrismaProvider from '../prisma-provider';
import { VENUE_DATA } from './data/venue.data';

const prisma = PrismaProvider.getConnection();

async function createVenueSeedData() {
  for (const venue of VENUE_DATA) {
    await prisma.venue.create({
      data: {
        ...venue,
      },
    });
  }
}

export default createVenueSeedData;
