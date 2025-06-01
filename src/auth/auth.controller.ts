import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAdminDto } from './dtos/admin.dto';
import { CreateLoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() dto: CreateAdminDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: CreateLoginDto) {
    return this.authService.login(dto);
  }
}
