import { Controller, Get } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Controller('computer')
export class ComputerController {
  constructor(private powerService: PowerService) {}

  @Get()
  getComputerRunning() {
    return this.powerService.supplyPower(20);
  }
}
