import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipePictureDto } from './create-recipe_picture.dto';

export class UpdateRecipePictureDto extends PartialType(CreateRecipePictureDto) {}
