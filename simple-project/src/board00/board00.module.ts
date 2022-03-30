import { Module } from '@nestjs/common';
import { Board00Controller } from './board00.controller';
import { Board00Service } from './board00.service';

@Module({
  imports: [],
  controllers: [Board00Controller],
  providers: [Board00Service],
})
export class Board00Module {}
