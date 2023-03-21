import { BadRequestException } from '@nestjs/common';

export default class DateUtil {
  static transformInputDate(date: string) {
    const regexp = new RegExp(
      /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/,
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
