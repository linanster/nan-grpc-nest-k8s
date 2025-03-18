import { Controller, Get } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Inject, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';

interface ISystemService {
  getHostname(data: {}): Observable<{ hostname: string }>;
}

@Controller('system')
export class MathController implements OnModuleInit {
  private systemService: ISystemService;

  @Inject('MATH_SERVICE')
  private readonly client: ClientGrpc;

  onModuleInit() {
    this.systemService = this.client.getService<ISystemService>('SystemService');
  }

  @Get('hostname')
  async getHostname() {
    return this.systemService.getHostname({}).toPromise();
  }
}