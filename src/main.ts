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

  // Apply rate limiting
  await app.register(fastifyRateLimit, {
    max: 100, // limit each IP to 100 requests
    timeWindow: '15 minutes',
  });

  // Apply security headers
  // Note: fastify-helmet is a wrapper around helmet.js for Fastify
  await app.register(fastifyHelmet);
  
  // Enable CORS
  // Note: In production, you should specify the allowed origins instead of using '*'
  app.enableCors({
    origin: '*', // or '*' in dev
    credentials: true, // if you're using cookies
  });
 
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();