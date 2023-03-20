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

@Controller('concerts')
@ApiTags('Concerts')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}

  @UseGuards(VenueGuard)
  @Post()
  create(@GetVenue() venue: Venue, @Body() createConcertDto: CreateConcertDto) {
    return this.concertService.create(venue, createConcertDto);
  }

  @Get()
  findAvailableConcerts(@Query() paginationDto: PaginationDto) {
    return this.concertService.findAvailableConcerts(paginationDto);
  }

  @UseGuards(VenueGuard)
  @Patch(':concertId')
  update(
    @GetVenue() venue: Venue,
    @Param('concertId') concertId: string,
    @Body() updateConcertDto: UpdateConcertDto,
  ) {
    return this.concertService.update(venue, concertId, updateConcertDto);
  }
}
