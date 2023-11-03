import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string
  ) {
    const hashedPassword = await this.authService.hashPassword(password);
    // Сохранение пользователя и его захешированного пароля в базу данных
    return { message: 'User registered successfully' };
  }

  @UseGuards(AuthGuard())
  @Post('login')
  async login(@Body('username') username: string) {
    const payload = { username, sub: 1 }; // Идентификатор пользователя
    const token = await this.authService.generateJwtToken(payload);
    return { access_token: token };
  }
}