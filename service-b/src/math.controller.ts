import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { hostname } from 'os';

@Controller()
export class MathController {
  @GrpcMethod('SystemService', 'GetHostname')
  getHostname() {
    return { hostname: hostname() };
  }
}