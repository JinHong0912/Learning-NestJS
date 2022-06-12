import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {
    super({
      //생성자 만드는 부분
      secretOrKey: '2022-06-12',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: { username }) {
    const { username } = payload;
    const userEntity: UserEntity = await this.userRepository.findOne({
      username,
    });
    if (!userEntity) {
      throw new UnauthorizedException('올바르지 않은 접근입니다.');
    }
    return userEntity;
  }
}
