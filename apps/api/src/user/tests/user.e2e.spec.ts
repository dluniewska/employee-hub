import { AppModule } from "./../../app.module";
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { PrismaService } from "./../../database/prisma/prisma.service";
import { useContainer } from "class-validator";
import { UserEntity } from "../entities/user.prisma.entity";

//e2e tests

describe('UsersController', () => {
    let app: INestApplication;
    let prisma: PrismaService;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleFixture.createNestApplication();

        prisma = app.get<PrismaService>(PrismaService);

        useContainer(app.select(AppModule), { fallbackOnErrors: true })
        app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

        await app.init();
    });

    describe('getUsers', () => {
        it('GET users => users[]', async () => {
            return await request(app.getHttpServer())
                .get('/users?take=10&skip=0')
                .expect(200)
        });
    });
});

