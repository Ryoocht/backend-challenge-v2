import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { VenueModule } from './module/venue/venue.module';
import { ConcertModule } from './module/concert/concert.module';
import { AuthModule } from './module/auth/auth.module';
import { BookingsModule } from './module/booking/booking.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    VenueModule,
    ConcertModule,
    AuthModule,
    BookingsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
