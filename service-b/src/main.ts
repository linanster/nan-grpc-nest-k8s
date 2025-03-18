import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'system',
        protoPath: join(__dirname, '../../proto/math.proto'),
        url: '0.0.0.0:50051',
      },
    },
  );
  await app.listen();
}
bootstrap();