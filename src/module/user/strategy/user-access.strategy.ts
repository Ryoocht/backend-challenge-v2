import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { UserService } from '../user.service';

@Injectable()
export class UserAccessStrategy extends PassportStrategy(
  Strategy,
  'user-access',
) {
  constructor(private readonly userService: UserService) {
    super();
  }

  async validate(req: Request): Promise<any> {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException();
    }
    const token = authorizationHeader.substring(7);
    const user = await this.userService.findOne(token);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
