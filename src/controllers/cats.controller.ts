/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatDto } from '../dto/cat-dto';
import { PrismaService } from 'src/prisma.service';

@Controller('cats')
export class CatsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getData() {
    const cats: Array<CatDto> = await this.prisma.cat.findMany();
    return cats;
  }

  @Post()
  async create(@Body() createCatDto: CatDto) {
    const cat = await this.prisma.cat.create({
      data: {
        fullName: createCatDto.fullName,
        birthDay: createCatDto.birthDay,
        
      },
    })
    return cat.id;
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    const cat = await this.prisma.cat.findUniqueOrThrow({where: {id: +id}});
    return cat;
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() {fullName, birthDay,}: CatDto ) {
    const updateCat = await this.prisma.cat.update({
      where: {id: + id,
      },
      data: {
        fullName,
        birthDay
      },
    });
    console.log(updateCat)
    return updateCat
  }
  
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleteCat = await this.prisma.cat.deleteMany({
      where: {
        id: +id
      },
    });

    console.log(deleteCat);
    return;
  }
}
