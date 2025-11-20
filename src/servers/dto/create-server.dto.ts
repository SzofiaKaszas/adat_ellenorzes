import { IsDateString, IsDefined, IsEmail, IsInt, IsIP, IsOptional, IsString, Min, MinLength } from "class-validator"

//class-validator https://github.com/typestack/class-validator
export class CreateServerDto {
  @IsDefined()
  @IsEmail()
  email : string
  @IsIP()
  ip : string
  @IsDateString()
  installedAt : string
  @IsOptional()
  @IsString()
  @MinLength(3)
  nickname? : string
  @IsInt()
  @Min(1)
  memory : number
}
