import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(private cpuService: CpuService) {}

  @Get()
  getComputerRunning() {
    return this.cpuService.compute(20);
  }
}
