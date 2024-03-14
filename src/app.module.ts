/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanceModule } from './modules/lance.module';
import { LanceModule } from './modules/lance.module';

@Module({
  imports: [LanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
