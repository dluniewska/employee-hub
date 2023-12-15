import { Test } from "@nestjs/testing";
import { UsersController } from "../user.controller";
import { UsersService } from "../user.services";
import { PrismaService } from "./../../database/prisma.service";

//unit tests

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService, PrismaService],
        }).compile();

        usersService = moduleRef.get<UsersService>(UsersService);
        usersController = moduleRef.get<UsersController>(UsersController);
    });

    describe('getUsers', () => {
        it('should return an array of users', async () => {
            const result = [];
            jest.spyOn(usersService, 'users').mockImplementation(async() => result);
            
            expect(await usersController.getUsers()).toBe(result);
        });
    });
}); 