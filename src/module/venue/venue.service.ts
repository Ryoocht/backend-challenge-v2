import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
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

  findAll() {
    return `This action returns all venue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venue`;
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return `This action updates a #${id} venue`;
  }

  remove(id: number) {
    return `This action removes a #${id} venue`;
  }
}
