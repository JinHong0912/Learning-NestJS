import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './auth-credential.dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  async signUp(authCredentialDto: AuthCredentialDto): Promise<UserEntity> {
    return await this.userRepository.createUser(authCredentialDto);
  }

  async signIn(authCredentialDto: AuthCredentialDto): Promise<string> {
    const { username, password } = authCredentialDto;
    // username에 해당하는 엔티티 조회
    const user = await this.userRepository.findOne({ username });

    // 비밀번호 검증
    if (user && (await bcrypt.compare(password, user.password))) {
      return 'Sign In  Success';
    } else {
      throw new UnauthorizedException('Sign In Failed');
    }
  }
}
