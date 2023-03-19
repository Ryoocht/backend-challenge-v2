import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateConcertCategoryDto {
  @ApiProperty({
    description: 'Concert Category',
    example: 'Rock',
  })
  @IsString()
  name: string;
}
