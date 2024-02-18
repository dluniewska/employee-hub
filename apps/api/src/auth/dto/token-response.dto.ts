import { BaseUserDto } from "./base-user.dto"

export type TokenResponseDto = {
    user: BaseUserDto
    token: string
}