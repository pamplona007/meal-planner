import { Test, TestingModule } from '@nestjs/testing';
import { RecipePicturesService } from './recipe_pictures.service';

describe('RecipePicturesService', () => {
  let service: RecipePicturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipePicturesService],
    }).compile();

    service = module.get<RecipePicturesService>(RecipePicturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
