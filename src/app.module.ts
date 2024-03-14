/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserController } from './controllers/user.controller';
import { CatsController } from './controllers/cats.controller';
import { DogController } from './controllers/dogs.controller';
import { FleeController } from './controllers/flee.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, CatsController, DogController, FleeController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
