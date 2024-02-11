import { Module } from '@nestjs/common';
import { UsersController } from './user.controller'
import { UsersService } from './user.services'
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/typeorm/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UserModule {}
