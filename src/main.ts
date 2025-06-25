import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fastifyRateLimit from '@fastify/rate-limit';
import fastifyHelmet from '@fastify/helmet';
import { AllExceptionsFilter } from './utils/all-exceptions.filter';
import { PrismaService } from './prisma/prisma.service';

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

  app.useGlobalFilters(new AllExceptionsFilter());

  // 🟢 This is critical
  await app.init();
  setInterval(async () => {
    try {
      const prisma = app.get(PrismaService);
      await prisma.$queryRaw`SELECT 1`; // lightweight ping
      console.log('[DB Ping] Keep-alive query sent');
    } catch (error) {
      console.error('[DB Ping] Failed:', error);
    }
  }, 10 * 60 * 1000); // every 10 minutes
  
  // Then start server
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();