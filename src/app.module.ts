import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './module/user/user.module';
import { PrismaModule } from './module/prisma/prisma.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
