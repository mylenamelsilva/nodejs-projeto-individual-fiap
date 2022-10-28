import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  async createRegister(req): Promise<string> {
    const {name} = req
    return `Cliente ${name} cadastrado com sucesso`
  }
}
