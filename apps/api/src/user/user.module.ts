import { Module } from '@nestjs/common';
import { UsersController } from './user.controller'
import { UserService } from './user.services'
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
