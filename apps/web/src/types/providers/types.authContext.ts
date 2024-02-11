import { BaseUserDto } from "shared-types";
import { ApiResponse } from "../types.apiResponse";

export type IAuthContext = {
    user: BaseUserDto | null,
    token: string | null,
    login: ((username: string, password: string) => Promise<ApiResponse>),
    logout: (() => Promise<void>),
    authme: (() => Promise<void>),
  };