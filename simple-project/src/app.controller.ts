import { Controller, Get} from "@nestjs/common";
import {write} from "fs";

@Controller('/now')
export class NowController{
  @Get('/day')
  getNow(): string {
    return 'test_날짜 만들기';
  }
}