import { Module } from '@nestjs/common';
import { UsersController } from './user.controller'
import { UsersService } from './user.services'
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UserModule {}
