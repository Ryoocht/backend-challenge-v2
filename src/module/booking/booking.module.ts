import { Module } from '@nestjs/common';
import { BookingsService } from './booking.service';
import { BookingsController } from './booking.controller';
import { ConcertModule } from '../concert/concert.module';

@Module({
  controllers: [BookingsController],
  providers: [BookingsService],
  imports: [ConcertModule],
})
export class BookingsModule {}
