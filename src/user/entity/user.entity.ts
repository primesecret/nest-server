import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity({ name: 'users_tb' })
export class User {

  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_pw: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  user_email: string

  @Column()
  permission: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  user_phone: string;

  @Column()
  school: string

  @Column()
  school_grade: number;

  @Column()
  school_class: number;

  @Column({ nullable: true })
  profile_pic: string;

  @Column({
    nullable: true,
    default: false,
  })
  pushNotify: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  isPublic: boolean;

  @Column({
    nullable: false,
    default: true,
  })
  isAllowed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;


  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.user_pw = await bcrypt.hash(this.user_pw, 10);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }

  async checkPassword(inputPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(inputPassword, this.user_pw);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        ...error.response,
      });
    }
  }

}
