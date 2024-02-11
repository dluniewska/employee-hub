import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import "reflect-metadata"
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  const config = new DocumentBuilder()

    .setTitle('Employee-Hub App')
    .setDescription('API of application for managing company employees')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(app.get(ConfigService).get('port'));
}
bootstrap();
