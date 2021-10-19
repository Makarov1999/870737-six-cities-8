import { MONTHS_DICTIONARY } from '../global.constants';

export function dateToDateTimeStr(date: Date): string {
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .split('T')[0];
}

export function getMonthTextFromDate(date: Date): string {
  return MONTHS_DICTIONARY[date.getMonth()];

}
