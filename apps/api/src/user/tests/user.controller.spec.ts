import { Test } from "@nestjs/testing";
import { PrismaUsersController } from "../user.prisma.controller";
import { PrismaUsersService } from "../user.prisma.services";
import { PrismaService } from "./../../database/prisma/prisma.service";

//unit tests

describe('UsersController', () => {
    let usersController: PrismaUsersController;
    let usersService: PrismaUsersService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [PrismaUsersController],
            providers: [PrismaUsersService, PrismaService],
        }).compile();

        usersService = moduleRef.get<PrismaUsersService>(PrismaUsersService);
        usersController = moduleRef.get<PrismaUsersController>(PrismaUsersController);
    });

    //todo: reads empty array
    describe('getUsers', () => {
        it('should return an array of users', async () => {
            const result = [];
            jest.spyOn(usersService, 'users').mockImplementation(async() => result);
            
            expect(await usersController.getUsers()).toBe(result);
        });
    });
}); 