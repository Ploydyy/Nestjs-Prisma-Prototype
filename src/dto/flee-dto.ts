/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class FleeDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   name: string;
}