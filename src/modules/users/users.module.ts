import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindUserMiddleware } from './users.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FindUserMiddleware)
      .forRoutes('users/:id');
  }
}
