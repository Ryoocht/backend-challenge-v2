import { BadRequestException } from '@nestjs/common';

export default class DateUtil {
  static transformInputDate(date: string) {
    const regexp = new RegExp(
      '([12]d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]d|3[01]))',
    );
    const isValidateDate = regexp.test(date);

    if (!isValidateDate)
      throw new BadRequestException(
        'Invalid date format. Input Date must be in YYYY-MM-DD.',
      );

    const transformDate = new Date(date);

    return transformDate;
  }
}
