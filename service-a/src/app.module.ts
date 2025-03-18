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
          url: 'demo4-grpc-server-svc.on-poc.svc.cluster.local:50051',
          channelOptions: {
            'grpc.service_config': JSON.stringify({
              loadBalancingConfig: [{ round_robin: {} }]
            }),
            'grpc.dns_min_time_between_resolutions_ms': 5000,
            'grpc.enable_retries': 1,
            'grpc.service_config_disable_resolution': 0,
            'grpc.lb_policy_name': 'round_robin',
            'grpc.max_reconnect_backoff_ms': 1000
          }
        },
      },
    ]),
  ],
  controllers: [MathController],
})
export class AppModule {}