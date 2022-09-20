import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class FindUserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async use(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    if (!id) {
      return next();
    }

    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('user_not_found');
    }

    request.user = user;

    return next();
  }
}
