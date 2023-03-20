import { Controller, Post, Body } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('venues')
@ApiTags('Venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }
}
