import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, ValidateTokenDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
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

  @Post('validate')
  async validateToken(@Body() dto: ValidateTokenDto) {
    return this.authService.validateToken(dto.token);
  }

  @Get('validate')
  async validateUserExists(@Query('userId') userId: string) {
    if (!userId) {
      return { error: 'User ID is required' };
    }
    return this.authService.validateUserExists(userId);
  }
}
