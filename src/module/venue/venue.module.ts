import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { VenueAccessStrategy } from './strategy/venue-access.strategy';

@Module({
  controllers: [VenueController],
  providers: [VenueService, VenueAccessStrategy],
})
export class VenueModule {}
