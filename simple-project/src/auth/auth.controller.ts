import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './auth-credential.dto';
import { UserEntity } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<UserEntity> {
    console.log(AuthController);
    return await this.authService.signUp(authCredentialDto);
  }
}
