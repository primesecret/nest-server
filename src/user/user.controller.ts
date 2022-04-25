import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserRequestDto, CreateUserResponseDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  
  constructor(private userService: UserService) {}

  @Post('sign-up')
  signUp(@Body() data: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    console.log('==>', data)
    return this.userService.signUp(data);
  }

  @Get('test')
  test() {
    return '<h1>test!!!</h1>'
  }
}
