import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import DateUtil from '../date-util/date-util';

export function DateValidatorDecorator(required = true) {
  return applyDecorators(
    IsDate(),
    ApiProperty({ example: '2023-03-20', required }),
    Transform(({ value }) => DateUtil.transformInputDate(value)),
  );
}
