import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, ValidateTokenDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern } from '@nestjs/microservices';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  // @Post('validate')
  // async validateToken(@Body() dto: ValidateTokenDto) {
  //   return this.authService.validateToken(dto.token);
  // }

  @MessagePattern({ cmd: 'validate_token' })
  async validateToken(token: string) {
    return this.authService.validateToken(token); // return user payload or null/throw
  }

  @Get('validate')
  async validateUserExists(@Query('userId') userId: string) {
    if (!userId) {
      return { error: 'User ID is required' };
    }
    return this.authService.validateUserExists(userId);
  }
}
