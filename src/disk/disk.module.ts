import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';

@Module({
  exports: [DiskService],
  providers: [DiskService],
})
export class DiskModule {}
