// auth.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [ configService.getOrThrow<string>('rabbit.rabbitUrl') ],
            queue: configService.getOrThrow<string>('rabbit.rabbitAuthQueue'),
            queueOptions: {
              durable: false,
            }
          },
        }),
        inject: [ConfigService]
      },
    ]),
  ],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
