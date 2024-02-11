import { Module, ValidationPipe } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { UnitModule } from './unit/unit.module';
import { SkillModule } from './skill/skill.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import authConfig from './config/auth.config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, appConfig]
    }),
    UserModule, 
    UnitModule, 
    SkillModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
