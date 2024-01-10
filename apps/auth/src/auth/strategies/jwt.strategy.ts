import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenResponseDto } from "shared-types";
require('dotenv').config();

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.JWT_SECRET
      });
    }
  
    async validate(payload: TokenResponseDto): Promise<TokenResponseDto> {
      return { user: payload.user, token: payload.token};
    }
  }