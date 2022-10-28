import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async createRegister(@Body() req) {
    const { name, email, password, site, phone } = req;
    return this.registerService.createRegister(
      name,
      email,
      password,
      site,
      phone,
    );
  }
}
