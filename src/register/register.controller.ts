import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async createRegister(@Body() req: CreateRegisterDTO): Promise<string> {
    return this.registerService.createRegister(req);
  }
}
