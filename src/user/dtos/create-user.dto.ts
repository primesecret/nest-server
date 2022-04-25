import { IsEmail, IsNumber, IsOptional, IsString, IS_NUMBER } from "class-validator";
import { CommonResponseDto } from "src/common/common.dto";

export class CreateUserRequestDto {
  
  @IsString()
  user_name: string;
  
  @IsString()
  user_pw: string;
  
  @IsEmail()
  user_email: string;

  @IsNumber()
  permission: number;

  @IsString()
  user_phone: string;

  @IsString()
  school: string;

  @IsNumber()
  school_grade: number;

  @IsNumber()
  school_class: number;

  @IsString()
  profile_pic: string;

}


export class CreateUserResponseDto extends CommonResponseDto {}