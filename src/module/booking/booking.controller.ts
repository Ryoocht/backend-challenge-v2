import {
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Query,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './booking.service';
import { UserGuard } from '../user/guard/user-guard';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from '../user/decorator/get-user.decorator';

@Controller('bookings')
@ApiTags('Bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}
  
  @Post(':userId/:concertId')
  create(
    @Param('userId') userId: string,
    @Param('concertId') concertId: string,
    ) {
    return this.bookingsService.create(userId, concertId);
  }
  
  @UseGuards(UserGuard)
  @Get()
  findAll(@GetUser() userId: string, @Query() paginationDto: PaginationDto) {
    return this.bookingsService.getBookedConcerts(userId, paginationDto);
  }

  @UseGuards(UserGuard)
  @Delete(':concertId')
  delete(@GetUser() userId: string, @Param('concertId') concertId: string) {
    return this.bookingsService.removeBooking(userId, concertId)
  }
}
