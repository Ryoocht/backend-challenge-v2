import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { BookingsService } from './booking.service';
import { UserGuard } from '../user/guard/user-guard';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../user/decorator/get-user.decorator';
import { User } from '@prisma/client';

@Controller('bookings')
@ApiTags('Bookings')
@ApiBearerAuth('Authorization')
@UseGuards(UserGuard)
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post(':userId/:concertId')
  create(
    @Param('userId') userId: string,
    @Param('concertId') concertId: string,
  ) {
    return this.bookingsService.create(userId, concertId);
  }

  @Get()
  findAll(@GetUser() user: User, @Query() paginationDto: PaginationDto) {
    return this.bookingsService.getBookedConcerts(user, paginationDto);
  }
}
