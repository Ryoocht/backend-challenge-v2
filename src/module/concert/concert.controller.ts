import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ConcertService } from './concert.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { VenueGuard } from '../venue/guard/venue-guard';
import { GetVenue } from '../venue/decorator/get-venue.decorator';
import { Venue } from '@prisma/client';
import { GetAllAvailableConcertDto } from './dto/get-all-available-concert.dto';

@Controller('concerts')
@ApiTags('Concerts')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}

  @UseGuards(VenueGuard)
  @Post()
  create(@GetVenue() venueId: string, @Body() createConcertDto: CreateConcertDto) {
    return this.concertService.create(venueId, createConcertDto);
  }

  @Get()
  findAvailableConcerts(@Query() getAllAvailableConcertDto: GetAllAvailableConcertDto) {
    return this.concertService.findAvailableConcerts(getAllAvailableConcertDto);
  }

  @UseGuards(VenueGuard)
  @Patch(':concertId')
  update(
    @GetVenue() venueId: string,
    @Param('concertId') concertId: string,
    @Body() updateConcertDto: UpdateConcertDto,
  ) {
    return this.concertService.update(venueId, concertId, updateConcertDto);
  }
}
