import { Module } from '@nestjs/common';
import { todo2Controller } from './todo2.controller';

@Module({
  controllers: [todo2Controller],
  providers: [],
})
export class todo2Module {}
