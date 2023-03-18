import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVenueAddressDto {
  @ApiProperty({
    example: '144 Edward Street Brisbane City 4000 QLD',
    required: true
  })
  @IsString()
  fullAddress: string;

  @ApiProperty({
    example: '144',
    required: true
  })
  @IsString()
  streetNumber: string;

  @ApiProperty({
    example: 'Edward Street',
    required: true
  })
  @IsString()
  streetName: string;

  @ApiProperty({
    example: 'Brisbane City',
    required: true
  })
  @IsString()
  suburb: string;

  @ApiProperty({
    example: 'QLD',
    required: true
  })
  @IsString()
  state: string;

  @ApiProperty({
    example: 'Australia',
    required: true
  })
  @IsString()
  country: string;

  @ApiProperty({
    example: '4000',
    required: true
  })
  @IsString()
  postcode: string;
}
