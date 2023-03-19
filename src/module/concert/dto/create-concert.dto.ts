import { ApiProperty } from '@nestjs/swagger';
import { DateValidatorDecorator } from 'src/util/decorator/date-validator.decorator';
import { CreateConcertCategoryDto } from './create-concert-category.dto';
import { IsNumber, IsString, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateConcertDto {
  @ApiProperty({
    description: 'Concert Title',
    example: 'Yoyo On The Show',
    required: true,
  })
  @MinLength(1)
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Concert Description',
    example:
      "Get ready for an electrifying musical experience! Join us for a soulful evening featuring world-renowned artists and captivating rhythms that will leave you mesmerized. Don't miss out on this unforgettable event!",
    required: true,
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Concert Date',
    example: '2023-03-25',
    required: true,
  })
  @DateValidatorDecorator()
  date: Date;

  @ApiProperty({
    description: 'Concert Capacity',
    example: 100,
    required: true,
  })
  @IsNumber()
  capacity: number;

  @ApiProperty({
    type: [CreateConcertCategoryDto]
  })
  @ValidateNested()
  @Type(() => CreateConcertCategoryDto)
  categories: CreateConcertCategoryDto[];
}
