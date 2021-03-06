import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRequestDto } from './dtos/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  // 회원가입
  async signUp(data: CreateUserRequestDto) {
    try {
      const exist = await this.userRepository.findOne({
        user_email: data.user_email,
      });
      if (exist)
        throw new BadRequestException({
          message: [`이미 존재하는 사용자입니다.`],
          error: 'Bad Request',
        });

      console.log(`create: ${data}`)
      const user = await this.userRepository.create(data);
      await this.userRepository.save(user);
      return {
        statusCode: 201,
      };
    } catch (error) {
      console.log(error.response);
      return {
        statusCode: error.code,
        ...error.driverError,
      };
    }
  }

}
