import { Module } from '@nestjs/common';
import { UsersController } from './user.controller'
import { UsersService } from './user.services'
import { PrismaModule } from 'src/database/prisma.module';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UserModule {}
