import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './auth-credential.dto';
import { UserEntity } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<UserEntity> {
    console.log(AuthController);
    return await this.authService.signUp(authCredentialDto);
  }

  @Post('sign-In')
  async signIn(@Body() authCredentialDto: AuthCredentialDto) {
    return this.authService.signIn(authCredentialDto);
  }
}
