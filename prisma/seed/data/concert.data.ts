import { Prisma } from '@prisma/client';

export const CONCERT_DATA: Prisma.ConcertCreateInput[] = [
  {
    id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a',
    title: 'The Jazz Masters',
    description:
      'Experience the magic of jazz with the world-renowned Jazz Masters. A night filled with soulful melodies and electrifying rhythms awaits you!',
    date: new Date('2023-04-01T20:00:00.000Z'),
    capacity: 10,
    categories: {
      create: [
        {
          category: {
            create: {
              id: '9cdf3c5e-d721-4553-9535-9cd5021d0265',
              name: 'Rock',
            },
          },
        },
        {
          category: {
            create: {
              id: '0bca6007-ebb6-4558-9a90-39164f372fb0',
              name: 'Jazz',
            },
          },
        },
      ],
    },
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: 'f68aafcc-bd10-4889-9df9-f735c61ec7d7',
    title: 'Rock It Up!',
    description:
      'Get ready to rock it up with the most famous rock bands in the world! Come and enjoy a night filled with unforgettable music and a vibrant atmosphere!',
    date: new Date('2023-04-02T19:00:00.000Z'),
    capacity: 200,
    categories: {
      create: [
        {
          category: {
            create: { id: '1d84e72e-b01e-4c3b-9f4e-72918c0b52c7', name: 'Pop' },
          },
        },
        {
          category: {
            create: {
              id: '0d66f039-bf06-4c5f-b8cf-50769c1a62d6',
              name: 'Electronic',
            },
          },
        },
      ],
    },
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: '9b7d0a6c-5d95-42c8-a8ee-9917226a1d7a',
    title: 'The Classics Revisited',
    description:
      'Relive the magic of classical music with the world-renowned orchestra. Let the enchanting melodies transport you to a different world!',
    date: new Date('2023-04-03T18:00:00.000Z'),
    capacity: 150,
    categories: {
      create: [
        {
          category: {
            create: {
              id: '3f57f7a3-79fc-4ee8-b9a2-d2a0d28e0e06',
              name: 'Hip hop',
            },
          },
        },
        {
          category: {
            create: {
              id: '17c0a2e6-914a-4a9e-aaf7-869b26c6b929',
              name: 'Classical',
            },
          },
        },
      ],
    },
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: 'a1e0f10c-30dc-48c7-b79f-755f7e8e32b1',
    title: 'Hip Hop Night',
    description:
      'Join us for an epic night filled with hip hop beats and groovy rhythms! The most famous hip hop artists will make you dance all night long!',
    date: new Date('2023-04-04T21:00:00.000Z'),
    capacity: 300,
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: '6e46eb85-81a6-4d13-bf5d-7d0c99e2f7b9',
    title: 'Country Music Night',
    description:
      'Get ready for a night filled with country music and line dancing! The most famous country artists will make you feel the southern vibes!',
    date: new Date('2023-04-05T20:00:00.000Z'),
    capacity: 250,
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: '88b94d92-1c98-4b8d-aa01-c547447ef6d9',
    title: 'Latin Beats',
    description:
      'Experience the vibrant rhythms of Latin music with the most famous Latin artists in the world! Get ready to dance the night away!',
    date: new Date('2023-04-06T19:00:00.000Z'),
    capacity: 150,
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: 'f301fd2f-2a02-4485-9d01-dfc7a8fc78b8',
    title: 'Classical Crossover',
    description:
      'Enjoy the fusion of classical and contemporary music with the world-renowned classical crossover artists. A night filled with musical magic awaits you!',
    date: new Date('2023-04-07T18:00:00.000Z'),
    capacity: 200,
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: '84d3cbdd-b24f-4e2f-bf87-9b9d27c02c97',
    title: 'Pop Explosion',
    description:
      'Get ready for a night filled with pop hits and electrifying performances! The most famous pop stars will make you sing and dance all night long!',
    date: new Date('2023-04-08T21:00:00.000Z'),
    capacity: 300,
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: '81f8c5ce-7d0c-4c26-9de5-04d44f2c5edc',
    title: 'The Legends Live On',
    description:
      'Relive the magic of the most iconic musicians in history with the world-renowned tribute bands. A night filled with nostalgia awaits you!',
    date: new Date('2023-04-09T20:00:00.000Z'),
    capacity: 250,
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
  {
    id: 'e835a1d3-3f3b-40c8-b6f2-6c0b6a13d0c9',
    title: 'EDM Party',
    description:
      'Get ready for a night filled with electronic beats and mind-blowing visuals! The most famous EDM artists will make you lose yourself in the music!',
    date: new Date('2023-04-10T19:00:00.000Z'),
    capacity: 200,
    venue: {
      connect: { id: '89d825ef-5d46-4401-a71d-6b65bf21b9e7' },
    },
  },
];
