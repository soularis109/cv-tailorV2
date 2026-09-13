import { Injectable } from '@nestjs/common';
import { PING } from '@tailorcv/contracts';

@Injectable()
export class AppService {
  getHello(): string {
    return `BFF alive. Contracts says: ${PING}`;
  }
}
