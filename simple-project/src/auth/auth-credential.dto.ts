import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4, { message: 'password의 길이는 최소 4자 이상 입니다.' })
  @MaxLength(20)
  @Matches(/^[a-zA-z0-9]*$/, { message: '사용자가 정의한 메시지 설정 하기' })
  password: string;
}
