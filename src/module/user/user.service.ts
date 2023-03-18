import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import PrismaProvider from 'prisma/prisma-provider';

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

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
