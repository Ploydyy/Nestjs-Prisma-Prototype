/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   firstName: string;

   @ApiProperty()
   lastName: string;

}