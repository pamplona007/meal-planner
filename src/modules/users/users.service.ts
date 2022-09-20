import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

const filterUser = (user: User) => {
  delete user.password;

  return user;
};

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userAlreadyExists = await this.repository.findOne({
      where: {
        email: createUserDto.email
      }
    });

    if (userAlreadyExists) {
      throw new Error('user_already_exists');
    }

    const user = new User();

    Object.assign(user, createUserDto);

    return this.repository.save(user);
  }

  find(user: User) {
    return filterUser(user);
  }

  async findAll() {
    const users = await this.repository.find();

    return users.map(filterUser);
  }

  update(user: User, updateUserDto: UpdateUserDto) {
    return this.repository.save({
      ...user,
      ...updateUserDto
    });
  }

  remove(user: User) {
    return this.repository.remove(user);
  }
}
