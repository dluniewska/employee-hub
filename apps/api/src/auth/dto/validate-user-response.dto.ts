export type ValidateUserResponseDto = {
    sub: number;
    username: string; 
    email: string;   
    role: string;
    iat: number;
    exp: number;
}