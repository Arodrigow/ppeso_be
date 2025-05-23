import { Test, TestingModule } from '@nestjs/testing';
import { PesohistoricoController } from './pesohistorico.controller';

describe('PesohistoricoController', () => {
  let controller: PesohistoricoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PesohistoricoController],
    }).compile();

    controller = module.get<PesohistoricoController>(PesohistoricoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
