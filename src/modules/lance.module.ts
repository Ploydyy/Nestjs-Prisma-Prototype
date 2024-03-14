/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LanceController } from './lance.controller';
import { LanceService } from '../services/lance.service';

@Module({
  controllers: [LanceController],
  providers: [LanceService],
})
export class LanceModule {}
