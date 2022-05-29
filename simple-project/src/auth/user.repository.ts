import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialDto } from './auth-credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<UserEntity> {
    const { username, password } = authCredentialDto;
    const encryptedPassword = await bcrypt.hash(password, 12); //여러번 salt 섞어 준다.
    console.log(encryptedPassword);
    const userEntity = this.create({ username, password: encryptedPassword });

    try {
      return await this.save(userEntity);
    } catch (error) {
      if (error.sqlState === '23000') {
        throw new ConflictException('이미 가입된 회원 입니다.');
      } else {
        throw new InternalServerErrorException('백엔드 개발자에게 문의 하세요');
      }
      console.log('error : ', error.sqlState);
      // return await this.save(userEntity);
    }
  }
}
