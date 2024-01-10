import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.services";
import { LoginCredentialsDto } from "shared-types";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(credentials: LoginCredentialsDto): Promise<any> {
    const user = await this.authService.validateUser(credentials);

    if(!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}