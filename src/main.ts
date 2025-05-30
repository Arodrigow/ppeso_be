import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fastifyRateLimit from '@fastify/rate-limit';
import fastifyHelmet from '@fastify/helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // Rate limiting
  await app.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '15 minutes',
  });

  // Helmet for security headers
  await app.register(fastifyHelmet);

  // Enable CORS
  app.enableCors({
    origin: '*',
    credentials: true,
  });

  // 🟢 This is critical
  await app.init();

  // Then start server
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();