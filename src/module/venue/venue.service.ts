import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import PrismaProvider from 'prisma/prisma-provider';

@Injectable()
export class VenueService {
  private readonly prisma = PrismaProvider.getConnection();

  create(createVenueDto: CreateVenueDto) {
    const venue = this.prisma.venue.create({
      data: {
        name: createVenueDto.name,
        address: {
          create: {
            ...createVenueDto.address,
          },
        },
      },
    });
    return venue;
  }
}
