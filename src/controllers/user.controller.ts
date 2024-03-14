/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "src/dto/user-dto";
import { PrismaService } from "src/prisma.service";

@Controller('users')
export class UserController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getData() {
    const users: Array<UserDto> = await this.prisma.user.findMany();
    return users;
  }

  @Post()
  async create(@Body() createUserDto: UserDto) {
    const user = await this.prisma.user.create({
      data: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
      },
    })
    return user.id;
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    const user = await this.prisma.user.findUniqueOrThrow({where: {id: +id}});
    return user;
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() {firstName, lastName,}: UserDto ) {
    const updateUser = await this.prisma.user.update({
      where: {id: + id,
      },
      data: {
        firstName,
        lastName
      },
    });
    console.log(updateUser)
    return updateUser
  }
  
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleteUser = await this.prisma.user.deleteMany({
      where: {
        id: +id
      },
    });

    console.log(deleteUser);
    return;
  }
}
