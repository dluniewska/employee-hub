import { BaseUserDto } from "./base-user.type"

export type TokenResponseDto = {
    user: BaseUserDto
    token: string
}