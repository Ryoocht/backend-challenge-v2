import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: 'Pagination page',
    example: 1,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  page: number;

  @ApiProperty({
    description: 'Pagination Take',
    example: 1,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  take: number;
}
