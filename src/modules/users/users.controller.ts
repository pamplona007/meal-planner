import { Controller, Get, Post, Body, Patch, Delete, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Req() request: Request) {
    return this.usersService.find(request.user);
  }

  @Patch(':id')
  update(@Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(request.user, updateUserDto);
  }

  @Delete(':id')
  remove(@Req() request: Request) {
    return this.usersService.remove(request.user);
  }
}
