import { Module } from '@nestjs/common';
import { BookingsService } from './booking.service';
import { BookingsController } from './booking.controller';
import { ConcertModule } from '../concert/concert.module';
import { ConcertService } from '../concert/concert.service';

@Module({
  controllers: [BookingsController],
  providers: [BookingsService, ConcertService],
  imports: [ConcertModule],
})
export class BookingsModule {}
