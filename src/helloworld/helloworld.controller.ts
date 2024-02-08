import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HelloworldController {
  @GrpcMethod('HelloworldService', 'SayHello')
  sayHello() {
    throw new Error('Method not implemented');
  }

  @GrpcMethod('HelloworldService', 'SayHelloStream')
  sayHelloStream() {
    throw new Error('Method not implemented');
  }
}
