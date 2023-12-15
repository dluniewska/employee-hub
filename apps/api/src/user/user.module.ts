import { Module } from '@nestjs/common';
import { UsersController } from './user.controller'
import { UsersService } from './user.services'
import { PrismaService } from './../database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UserModule {}
