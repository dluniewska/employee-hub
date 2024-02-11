import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.getOrThrow<string>('postgresHost'),
          port: configService.getOrThrow<number>('postgresPort'),
          database: configService.getOrThrow<string>('postgresDb'),
          username: configService.getOrThrow<string>('postgresUser'),
          password: configService.getOrThrow<string>('postgresPwd'),
          autoLoadEntities: true,
          synchronize: configService.getOrThrow<boolean>('synchronize')
        }),
        inject: [ConfigService]
    })
  ]
})
export class TypeORMModule {}
