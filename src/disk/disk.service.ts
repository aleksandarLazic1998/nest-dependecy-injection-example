import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
  getData() {
    return `Collected 1 TB of data`;
  }
}
