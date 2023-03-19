import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import PrismaProvider from 'prisma/prisma-provider';

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'access') {
  private readonly prisma = PrismaProvider.getConnection();

  constructor() {
    super();
  }

  async validate(request: Request): Promise<any> {
    const token = request.headers;
    console.log({ token });
    return 'strategy'
    // const user = await this.prisma.venue.findUnique({where: {id: request}})

    //     const user = await this.prisma.venue.findUnique({where: {id: }});
    //     if (!user) {
    //       throw new UnauthorizedException();
    //     }
    //     return user;
    //   }
  }
}
