import { Test, TestingModule } from '@nestjs/testing';
import { RecipePicturesController } from './recipe_pictures.controller';
import { RecipePicturesService } from './recipe_pictures.service';

describe('RecipePicturesController', () => {
  let controller: RecipePicturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipePicturesController],
      providers: [RecipePicturesService],
    }).compile();

    controller = module.get<RecipePicturesController>(RecipePicturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
