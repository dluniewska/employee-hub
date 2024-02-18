import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { TypeOrmUsersService } from './user.typeorm.service';
import { TypeOrmUsersController } from './user.typeorm.controller';
import { Position } from 'src/database/typeorm/entities/position.entity';
import { Unit } from 'src/database/typeorm/entities/unit.entity';
import { Experience } from 'src/database/typeorm/entities/experience.entity';
import { Schedule } from 'src/database/typeorm/entities/schedule.entity';
import { Skill } from 'src/database/typeorm/entities/skill.entity';
import { SkillsOnUsers } from 'src/database/typeorm/entities/skills-on-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Position, Unit, Experience, Schedule, Skill, SkillsOnUsers]), AuthModule],
  controllers: [TypeOrmUsersController],
  providers: [TypeOrmUsersService]
})
export class UserModule {}
