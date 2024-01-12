import { Module, ValidationPipe } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { UnitModule } from './unit/unit.module';

@Module({
  imports: [UserModule, UnitModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
