// auth.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBIT_URL],
          queue: process.env.RABBIT_AUTH_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
