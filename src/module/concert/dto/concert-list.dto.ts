import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { DateValidatorDecorator } from 'src/util/decorator/date-validator.decorator';
import { PaginationDto } from 'src/util/dto/pagination.dto';

export class ConcertListDto extends PaginationDto {
  @ApiProperty({
    description: 'Search by Title',
    example: 'The Jazz Masters',
  })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'Search by Date',
    example: '2023-03-21',
  })
  @IsString()
  @IsOptional()
  @DateValidatorDecorator()
  date: Date;

  @ApiProperty({
    description: 'Search by Category',
    example: 'Jazz',
  })
  @IsString()
  @IsOptional()
  category: string;
}
