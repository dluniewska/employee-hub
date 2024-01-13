import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private reflector: Reflector) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
      if (!requiredRoles) {
        let res = await this.authService.validateUser(context);
        return res != null;
      }
      let res = await this.authService.validateUser(context);
      return requiredRoles.some((role) => res.role === role);
    }
    catch (err) {
      return false;
    }
  }
}