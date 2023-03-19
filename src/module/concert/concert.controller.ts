import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AccessGuard } from '../auth/guard/access.guard';
import { PaginationDto } from 'src/util/dto/pagination.dto';

@Controller('concerts')
@ApiTags('Concerts')
// @ApiBearerAuth('Authorization')
// @UseGuards(AccessGuard)
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}
  
  @Post()
  create(@Body() createConcertDto: CreateConcertDto) {
    return this.concertService.create(createConcertDto);
  }

  @Get()
  findAvailableConcerts(@Query() paginationDto: PaginationDto) {
    return this.concertService.findAvailableConcerts(paginationDto);
  }

  @Get(':userId')
  findBookedConcerts(@Param('userId') userId: string) {
    return this.concertService.findBookedConcerts(userId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.concertService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    return this.concertService.update(+id, updateConcertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concertService.remove(+id);
  }
}
