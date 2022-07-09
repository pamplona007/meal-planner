import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipePicturesService } from './recipe_pictures.service';
import { CreateRecipePictureDto } from './dto/create-recipe_picture.dto';
import { UpdateRecipePictureDto } from './dto/update-recipe_picture.dto';

@Controller('recipe-pictures')
export class RecipePicturesController {
  constructor(private readonly recipePicturesService: RecipePicturesService) {}

  @Post()
  create(@Body() createRecipePictureDto: CreateRecipePictureDto) {
    return this.recipePicturesService.create(createRecipePictureDto);
  }

  @Get()
  findAll() {
    return this.recipePicturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipePicturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipePictureDto: UpdateRecipePictureDto) {
    return this.recipePicturesService.update(+id, updateRecipePictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipePicturesService.remove(+id);
  }
}
