import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
