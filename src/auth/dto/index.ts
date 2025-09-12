import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class ValidateTokenDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}

export class UserResponseDto {
  id: string;
  email: string;
  createdAt: Date;
}

export class AuthResponseDto {
  message: string;
  user: UserResponseDto;
  accessToken: string;
  refreshToken: string;
}

export class ValidateResponseDto {
  valid: boolean;
  user?: UserResponseDto;
}

export class UserExistsResponseDto {
  exists: boolean;
  user?: UserResponseDto;
}
