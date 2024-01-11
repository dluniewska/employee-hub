import { BaseUserDto } from "../user"

export type TokenResponseDto = {
    user: BaseUserDto
    token: string
}