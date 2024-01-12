import { Module, ValidationPipe } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { UnitModule } from './unit/unit.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [UserModule, UnitModule, SkillModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
