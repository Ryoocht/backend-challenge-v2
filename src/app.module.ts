import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './module/user/user.module';
import { VenueModule } from './module/venue/venue.module';
import { ConcertModule } from './module/concert/concert.module';

@Module({
  imports: [UserModule, VenueModule, ConcertModule],
  controllers: [AppController],
})
export class AppModule {}
