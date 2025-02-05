import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Include credentials (like cookies)
  });

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();
