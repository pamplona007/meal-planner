import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipePicturesModule } from './modules/recipe_pictures/recipe_pictures.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'docker',
      password: 'docker',
      database: 'meal_planner',
      entities: ['./build/**/entities/*.entity.js'],
      synchronize: true,
    }),
    UsersModule,
    RecipesModule,
    IngredientsModule,
    RecipePicturesModule,
  ],
})

export class AppModule {
  constructor(private dataSource: DataSource) {}
}
