import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './auth-credential.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  async signUp(authCredentialDto: AuthCredentialDto): Promise<UserEntity> {
    return await this.userRepository.createUser(authCredentialDto);
  }
}
