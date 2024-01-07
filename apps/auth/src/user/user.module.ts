import { Module } from '@nestjs/common';
import { UsersService } from './user.services'
import { KnexModule } from 'src/database/knex.module';

@Module({
  imports: [KnexModule],
  providers: [UsersService],
  exports: [UsersService]
})
export class UserModule {}
