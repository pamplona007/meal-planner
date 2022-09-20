import { Injectable } from '@nestjs/common';
import { CreateRecipePictureDto } from './dto/create-recipe_picture.dto';
import { UpdateRecipePictureDto } from './dto/update-recipe_picture.dto';

@Injectable()
export class RecipePicturesService {
  create(createRecipePictureDto: CreateRecipePictureDto) {
    return 'This action adds a new recipePicture';
  }

  findAll() {
    return `This action returns all recipePictures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipePicture`;
  }

  update(id: number, updateRecipePictureDto: UpdateRecipePictureDto) {
    return `This action updates a #${id} recipePicture`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipePicture`;
  }
}
