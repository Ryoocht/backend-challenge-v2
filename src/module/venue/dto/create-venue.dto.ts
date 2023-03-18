import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateVenueAddressDto } from './create-venue-address.dto';

export class CreateVenueDto {
  @ApiProperty({
    description: 'Venue Name',
    example: 'Brisbane Music Hall',
    required: true
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Venue Address',
    required: true
  })
  @ValidateNested()
  @Type(() => CreateVenueAddressDto)
  address: CreateVenueAddressDto
}
