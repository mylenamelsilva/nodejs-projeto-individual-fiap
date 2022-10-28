import {
    IsNotEmpty,
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    IsEmpty,
    IsNumberString,
  } from 'class-validator';
  
export class CreateRegisterDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    password: number;

    @IsNotEmpty()
    @IsString()
    site: string;

    @IsString()
    phone: string;
}