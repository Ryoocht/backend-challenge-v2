import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { CheckUnique } from 'src/util/decorator/check-unique.decorator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User First Name',
    example: 'Ryo',
    required: true,
  })
  @MinLength(1)
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'User Last Name',
    example: 'Tanaka',
    required: true,
  })
  @IsString()
  lastName: string;

  //   @CheckUnique(async (value, prisma) => {
  //     const user = await prisma.user.findUnique({ where: { email: value } });

  //     return !!user;
  //   })
  @ApiProperty({
    description: 'User Email',
    example: 'ryo@moonward.com.au',
    required: true,
  })
  @IsEmail()
  email: string;
}
