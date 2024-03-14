/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FleeDto } from 'src/dto/flee-dto';
import { PrismaService } from 'src/prisma.service';

@Controller('flee')
export class FleeController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getData() {
    const flees: Array<FleeDto> = await this.prisma.flee.findMany();
    return flees;
  }

  @Post()
  async create(@Body() createFleeDto: FleeDto) {
    const flee = await this.prisma.flee.create({
      data: {
        name: createFleeDto.name,
        
      },
    })
    return flee.id;
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    const flee = await this.prisma.flee.findUniqueOrThrow({where: {id: +id}});
    return flee;
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() {name}: FleeDto ) {
    const updateFlee = await this.prisma.flee.update({
      where: {id: + id,
      },
      data: {
        name,
      },
    });
    return updateFlee
  }
  
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleteFlee = await this.prisma.flee.deleteMany({
      where: {
        id: +id
      },
    });

    console.log(deleteFlee);
    return;
  }
}
