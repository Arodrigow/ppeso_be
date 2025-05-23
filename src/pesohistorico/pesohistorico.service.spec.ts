import { Test, TestingModule } from '@nestjs/testing';
import { PesohistoricoService } from './pesohistorico.service';

describe('PesohistoricoService', () => {
  let service: PesohistoricoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PesohistoricoService],
    }).compile();

    service = module.get<PesohistoricoService>(PesohistoricoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
