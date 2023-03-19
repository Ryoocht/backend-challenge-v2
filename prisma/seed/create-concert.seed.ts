import PrismaProvider from '../prisma-provider';
import { CONCERT_DATA } from './data/concert.data';

const prisma = PrismaProvider.getConnection();

async function createConcertSeedData() {
  for (const concert of CONCERT_DATA) {
    await prisma.concert.create({
      data: {
        ...concert,
      },
    });
  }
}

export default createConcertSeedData;
