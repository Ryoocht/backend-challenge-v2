import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { VenueService } from '../venue.service';

@Injectable()
export class VenueAccessStrategy extends PassportStrategy(
  Strategy,
  'venue-access',
) {
  constructor(private readonly venueService: VenueService) {
    super();
  }

  async validate(req: Request): Promise<any> {
    const authorizationHeader = req.headers['authorization'];
    
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        throw new UnauthorizedException();
    }
    const token = authorizationHeader.substring(7);
    const venue = await this.venueService.findOne(token);
    if (!venue) {
      throw new UnauthorizedException();
    }
    return venue.id;
  }
}
