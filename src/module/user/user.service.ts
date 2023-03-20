import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import PrismaProvider from 'prisma/prisma-provider';
import { User } from '@prisma/client';
import { PaginationDto } from 'src/util/dto/pagination.dto';

@Injectable()
export class UserService {
  private readonly prisma = PrismaProvider.getConnection();

  create(createUserDto: CreateUserDto) {
    const { firstName, lastName, email } = createUserDto;
    const user = this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });
    return user;
  }

  findOne(userId: string) {
    const user = this.prisma.user.findUnique({ where: { id: userId } });
    return user;
  }
}
