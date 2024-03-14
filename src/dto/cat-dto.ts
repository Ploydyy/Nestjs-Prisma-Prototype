/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CatDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   fullName: string;

   @ApiProperty()
   birthDay: Date;
}