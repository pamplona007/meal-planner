import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { RecipePicturesModule } from './recipe_pictures/recipe_pictures.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const defaultOptions = await getConnectionOptions();

        const connection = Object.assign(defaultOptions, {
          database: process.env.NODE_ENV === "test"
            ? defaultOptions.database + "_test"
            : defaultOptions.database,
        })

        return connection;
      }
    }),
    UsersModule,
    RecipesModule,
    IngredientsModule,
    RecipePicturesModule,
  ],
})

export class AppModule { }
