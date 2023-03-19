import createConcertSeedData from './seed/create-concert.seed';
import createUserSeedData from './seed/create-user.seed';
import createVenueSeedData from './seed/create-venue.seed';
import createBookingSeedData from './seed/create-booking.seed';

async function main() {
  await createUserSeedData();
  await createVenueSeedData();
  await createConcertSeedData();
  await createBookingSeedData();
}

main();
