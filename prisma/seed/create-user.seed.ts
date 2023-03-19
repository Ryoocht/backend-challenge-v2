import PrismaProvider from '../prisma-provider';
import { USER_DATA } from './data/user.data';

const prisma = PrismaProvider.getConnection();

async function createUserSeedData() {
  for (const user of USER_DATA) {
    await prisma.user.create({
      data: {
        ...user,
      },
    });
  }
}

export default createUserSeedData