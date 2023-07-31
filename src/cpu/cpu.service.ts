import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(power: number) {
    return `CPU will be powered with ${this.powerService.supplyPower(power)}`;
  }
}