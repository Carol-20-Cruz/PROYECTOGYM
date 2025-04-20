import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator"

export class CreateUserDto {

    @IsString()
    name: string;
  
    @IsString()
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

} 

