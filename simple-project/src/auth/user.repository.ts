import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialDto } from './auth-credential.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<UserEntity> {
    const { username, password } = authCredentialDto;
    const userEntity = this.create({ username, password });
    return await this.save(userEntity);
  }
}
