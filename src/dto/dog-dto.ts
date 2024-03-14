/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class DogDto {
   @ApiProperty()
   id: number;

   @ApiProperty()
   fullName: string;

   @ApiProperty()
   birthDay: Date;
}