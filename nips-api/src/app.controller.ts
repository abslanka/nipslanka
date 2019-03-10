import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  heartBeat(): any {
    return { connected: true };
  }
}
