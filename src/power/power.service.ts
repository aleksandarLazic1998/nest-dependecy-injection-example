import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(power: number) {
    return `running on ${power} watts`;
  }
}
