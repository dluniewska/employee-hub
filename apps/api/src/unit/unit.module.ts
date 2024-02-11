import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { UnitsService } from './unit.services';
import { UnitsController } from './unit.controller';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UnitsController],
  providers: [UnitsService]
})
export class UnitModule {}
