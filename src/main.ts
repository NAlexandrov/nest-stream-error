import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'node:path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'helloworld.v1',
        protoPath: join(__dirname, '..', 'contract', 'v1', 'helloworld.proto'),
        url: '0.0.0.0:50051',
      },
    },
  );

  await app.listen();
}
bootstrap();
