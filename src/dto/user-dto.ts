/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   firstName: string;

   @ApiProperty()
   lastName: string;

}