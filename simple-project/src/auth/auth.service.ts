import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './auth-credential.dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(authCredentialDto: AuthCredentialDto): Promise<UserEntity> {
    return await this.userRepository.createUser(authCredentialDto);
  }

  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialDto;
    // username에 해당하는 엔티티 조회
    const user = await this.userRepository.findOne({ username });
    // 비밀번호 검증

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accessToken = await this.jwtService.signAsync(payload);

      // return 'Sign In  Success';
      return { accessToken };
    } else {
      throw new UnauthorizedException('Sign In Failed');
    }
  }
}
