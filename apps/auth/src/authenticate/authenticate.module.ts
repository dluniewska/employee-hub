import { Module } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';

@Module({
  controllers: [],
  providers: [AuthenticateService]
})
export class AuthenticateModule {}
