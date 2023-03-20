export default class DateUtil {
  static transformInputDate(date: string) {
    const regexp = new RegExp('([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))')
    const isValidateDate = regexp.test(date)
    if (!isValidateDate) return false
    const transformDate = new Date(date)

    return transformDate
  }
}