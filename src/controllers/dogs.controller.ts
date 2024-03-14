/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DogDto } from 'src/dto/dog-dto';
import { PrismaService } from 'src/prisma.service';

@Controller('dogs')
export class DogController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getData() {
    const dogs: Array<DogDto> = await this.prisma.dog.findMany();
    return dogs;
  }

  @Post()
  async create(@Body() createDogDto: DogDto) {
    const cat = await this.prisma.dog.create({
      data: {
        fullName: createDogDto.fullName,
        birthDay: createDogDto.birthDay,
        
      },
    })
    return cat.id;
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    const dog = await this.prisma.dog.findUniqueOrThrow({where: {id: +id}});
    return dog;
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() {fullName, birthDay,}: DogDto ) {
    const updateDog = await this.prisma.dog.update({
      where: {id: + id,
      },
      data: {
        fullName,
        birthDay
      },
    });
    console.log(updateDog)
    return updateDog
  }
  
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleteDog = await this.prisma.dog.deleteMany({
      where: {
        id: +id
      },
    });

    console.log(deleteDog);
    return;
  }
}
