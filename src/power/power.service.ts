import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(number: 20) {
    return `running on ${number} wats`;
  }
}
