import { Prisma } from '@prisma/client';

export const VENUE_DATA: Prisma.VenueCreateInput[] = [
  {
    id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7',
    name: 'The Velvet Room',
    address: {
      create: {
        id: '45450ff2-ec45-4ceb-a062-f6be26ec8434',
        fullAddress: '123 Main Street',
        streetNumber: '123',
        streetName: 'Main Street',
        suburb: 'Melbourne',
        state: 'Victoria',
        country: 'Australia',
        postcode: '3000',
      },
    },
  },
  {
    id: 'a8c5997c-9b87-4f4d-b4f4-bde5e6f901d6',
    name: 'The Electric Ballroom',
    address: {
      create: {
        id: '8e615d25-d46a-47b8-946c-81fb729d1bb9',
        fullAddress: '456 Queen Street',
        streetNumber: '456',
        streetName: 'Queen Street',
        suburb: 'Brisbane',
        state: 'Queensland',
        country: 'Australia',
        postcode: '4000',
      },
    },
  },
  {
    id: '2b32e13f-8b94-4b75-9ebf-c496c669f8de',
    name: 'The Grand Palace',
    address: {
      create: {
        id: 'd81f2e5c-b8f7-4a9d-9b37-c165c2970a7b',
        fullAddress: '789 King Street',
        streetNumber: '789',
        streetName: 'King Street',
        suburb: 'Sydney',
        state: 'New South Wales',
        country: 'Australia',
        postcode: '2000',
      },
    },
  },
  {
    id: 'ba2f46d7-7361-4845-a09d-8aa6f66b23c5',
    name: 'The Starlight Lounge',
    address: {
      create: {
        id: '8f6ec73a-628f-4c68-86f8-42a53aee1e33',
        fullAddress: '321 High Street',
        streetNumber: '321',
        streetName: 'High Street',
        suburb: 'Adelaide',
        state: 'South Australia',
        country: 'Australia',
        postcode: '5000',
      },
    },
  },
  {
    id: '0c28fa7e-af2a-491a-9d3e-59e0f5a5a080',
    name: 'The Sapphire Club',
    address: {
      create: {
        id: '799efbca-73f7-4821-880c-6ddcd94f102e',
        fullAddress: '111 Beach Road',
        streetNumber: '111',
        streetName: 'Beach Road',
        suburb: 'Gold Coast',
        state: 'Queensland',
        country: 'Australia',
        postcode: '4217',
      },
    },
  },
  {
    id: 'db2da9d9-0f17-4f0e-b92b-798f4f3eeb3e',
    name: 'The Blue Note',
    address: {
      create: {
        id: '0fbd74-4d96-bfef-719f8bbbf5a7',
        fullAddress: '222 Flinders Street',
        streetNumber: '222',
        streetName: 'Flinders Street',
        suburb: 'Melbourne',
        state: 'Victoria',
        country: 'Australia',
        postcode: '3000',
      },
    },
  },
  {
    id: '17381c09-ee28-4c84-9d8a-c1fdd4992a81',
    name: 'The Jazz Club',
    address: {
      create: {
        id: 'fe9a76c7-6350-4975-92d5-8df5c5be5cf5',
        fullAddress: '777 Brunswick Street',
        streetNumber: '777',
        streetName: 'Brunswick Street',
        suburb: 'Fitzroy',
        state: 'Victoria',
        country: 'Australia',
        postcode: '3065',
      },
    },
  },
  {
    id: 'd81f2e5c-b8f7-4a9d-9b37-c165c2970a7b',
    name: 'The Opera House',
    address: {
      create: {
        id: 'a17fb36d-d6d0-4ab3-9c98-793e9da696aa',
        fullAddress: 'Bennelong Point',
        streetNumber: '',
        streetName: '',
        suburb: 'Sydney',
        state: 'New South Wales',
        country: 'Australia',
        postcode: '2000',
      },
    },
  },
  {
    id: 'e69525a6-f1c1-413c-a8ec-e4415c5ba5f5',
    name: 'The Main Room',
    address: {
      create: {
        id: 'd9c08cbb-3992-44a2-a406-16537343e550',
        fullAddress: '555 Collins Street',
        streetNumber: '555',
        streetName: 'Collins Street',
        suburb: 'Melbourne',
        state: 'Victoria',
        country: 'Australia',
        postcode: '3000',
      },
    },
  },
  {
    id: '8d4de4b3-c3e4-4e1c-b31b-58f0c3472396',
    name: 'The Garden',
    address: {
      create: {
        id: 'fb5b1d6c-b06c-43b2-8d92-4f4e3cb3c242',
        fullAddress: '88 Smith Street',
        streetNumber: '88',
        streetName: 'Smith Street',
        suburb: 'Collingwood',
        state: 'Victoria',
        country: 'Australia',
        postcode: '3066',
      },
    },
  },
  {
    id: 'b854e8e8-3d3f-4383-8b3d-390d1f77c1a7',
    name: 'The Rooftop',
    address: {
      create: {
        id: '96a1d873-1eb7-43a9-b2e9-dcfe79fc2dd0',
        fullAddress: '123 Little Lonsdale Street',
        streetNumber: '123',
        streetName: 'Little Lonsdale Street',
        suburb: 'Melbourne',
        state: 'Victoria',
        country: 'Australia',
        postcode: '3000',
      },
    },
  },
];
