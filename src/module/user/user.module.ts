import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserAccessStrategy } from './strategy/user-access.strategy';

@Module({
  controllers: [UserController],
  providers: [UserService, UserAccessStrategy],
  exports: [UserService],
})
export class UserModule {}
