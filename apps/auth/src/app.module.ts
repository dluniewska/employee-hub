import { Module } from '@nestjs/common';
import { AuthenticateModule } from './authenticate/authenticate.module';

@Module({
  imports: [AuthenticateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
