import { Prisma } from '@prisma/client';

export const BOOKING_DATA: Prisma.BookingCreateInput[] = [
  {
    id: 'a98fdbd9-589f-4f18-af10-34a3ef74c0a5',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: '29ab0203-2664-4bf3-b7d4-27dbfed31b13' },
    },
    createdAt: new Date(),
  },
  {
    id: 'c31d4e45-8c1f-45e1-96d4-2a40a7f9b2d2',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: '5c5d5d5f-37cf-427a-9d52-22f1d2c2df37' },
    },
    createdAt: new Date(),
  },
  {
    id: 'd4338f10-3b7c-4972-9206-129b8f50ca09',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: 'a7a1a1a1-7686-4c6a-aa7a-fc779d41cf8b' },
    },
    createdAt: new Date(),
  },
  {
    id: '5b5a02a4-4b4f-4b2d-92c2-cb1c06e8b2d2',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: 'c4c4c4c4-0cf4-4a2b-b3b4-4e13d9e29e8f' },
    },
    createdAt: new Date(),
  },
  {
    id: '31c7b9dc-61d9-42fc-bf67-d70b11e1d767',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: 'b2b2b2b2-8da8-43f6-a34e-ced98e9d0740' },
    },
    createdAt: new Date(),
  },
  {
    id: 'e20b9f92-2f8f-4f62-b0d3-b3aa7d4748b1',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: 'f5f5f5f5-5d5c-4a69-9ef1-30b7bb3a3a6a' },
    },
    createdAt: new Date('2023-03-07T19:43:23.000Z'),
  },
  {
    id: 'c4e72248-4bfb-4b5d-8b69-5015e5a3c35c',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: 'd3d3d3d3-5c5d-4a3c-9c9d-47c3a636bafc' },
    },
    createdAt: new Date('2023-03-08T09:15:57.000Z'),
  },
  {
    id: '8e456e1a-5bc5-4f39-8f4e-1ee4a522eb3d',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: '11aa11aa-2cc2-45d8-84e9-84ce98aa9ac9' },
    },
    createdAt: new Date('2023-03-09T14:37:01.000Z'),
  },
  {
    id: 'c8e28aa2-b2d2-4725-9f5e-b05ab790f00e',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: 'b1b1b1b1-d1d1-4c28-a8e3-48ff07db090c' },
    },
    createdAt: new Date('2023-03-10T21:09:41.000Z'),
  },
  {
    id: '865b55a9-90c9-4433-8773-3e3a63f63c29',
    concert: {
      connect: { id: '49c38a5b-6c02-4295-98a2-10aa09e17a9a' },
    },
    user: {
      connect: { id: '5c5d5d5f-37cf-427a-9d52-22f1d2c2df37' },
    },
    createdAt: new Date('2023-03-11T05:22:12.000Z'),
  },
];
