import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.services"
import { User } from "@prisma/client";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get('/users')
  getUsers(): User[] {
    return this.usersService.getUsers();
  }
}