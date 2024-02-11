import { Module } from '@nestjs/common';
import { SkillsController } from './skill.controller'
import { SkillsService } from './skill.services'
import { PrismaModule } from 'src/database/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillModule {}
