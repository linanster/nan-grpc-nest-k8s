import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MathController } from './math.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'system',
          protoPath: join(__dirname, '../../proto/math.proto'),
          url: 'service-b:50051'
        },
      },
    ]),
  ],
  controllers: [MathController],
})
export class AppModule {}