import { BaseUserDto } from "shared-types";

export type IAuthContext = {
    user: BaseUserDto | null,
    token: string | null,
    login: (username: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    authme: (token: string) => Promise<void>,
  };