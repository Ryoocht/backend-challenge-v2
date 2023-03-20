import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDate } from 'class-validator';
import DateUtil from '../date-util/date-util';

export function DateValidatorDecorator(required = true) {
  return applyDecorators(
    IsDate(),
    ApiProperty({ example: new Date(), required }),
    /* transform date to YYYY-MM-DD */
    Transform(({ value }) => DateUtil.transformInputDate(value)),
    Type(() => Date),
  );
}