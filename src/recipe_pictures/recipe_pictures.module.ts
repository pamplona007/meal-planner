import { Module } from '@nestjs/common';
import { RecipePicturesService } from './recipe_pictures.service';
import { RecipePicturesController } from './recipe_pictures.controller';

@Module({
  controllers: [RecipePicturesController],
  providers: [RecipePicturesService]
})
export class RecipePicturesModule {}
