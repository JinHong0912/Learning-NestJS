import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './auth-credential.dto';
import { UserEntity } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './current-user.decorator';

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

  //Jwt TEST
  @Get('auth_jwt')
  @UseGuards(AuthGuard())
  jwtTest(@CurrentUser() user: UserEntity) {
    console.log(user);
  }

  // authJwt(@Req() req) {
  //   console.log(req);
  // }
}
