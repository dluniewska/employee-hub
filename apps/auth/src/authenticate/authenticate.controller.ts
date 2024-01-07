import { Body, Controller, Post } from "@nestjs/common";
import { AuthenticateService } from "./authenticate.service";

type SigninUserDto = {
    name: string,
    password: string
}

@Controller("users")
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticateService) { }
  
    
    @Post('/signup')
    signup(@Body() data: SigninUserDto): Promise<any> {
        return this.authenticationService.signin(data.name, data.password);
    }
}
