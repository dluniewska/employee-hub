import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_URL],
      queue: process.env.RABBIT_AUTH_QUEUE,
      queueOptions: {
          durable: false
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(4000);
}
bootstrap();
