import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from '@/app.module';
import { createSwaggerDocument } from './swagger.config';

async function generateSwaggerJson() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: false },
  );

  await app.init();

  const document = createSwaggerDocument(app);
  const outputPath = join(process.cwd(), 'api.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 2), 'utf-8');

  await app.close();
  // eslint-disable-next-line no-console
  console.log(`Swagger JSON generated at: ${outputPath}`);
}

generateSwaggerJson();
