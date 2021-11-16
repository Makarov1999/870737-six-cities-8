import { MONTHS_DICTIONARY } from '../global.constants';

export function dateToDateTimeStr(dateStr: string): string {
  const date = new Date(dateStr);
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .split('T')[0];
}

export function getMonthTextFromDate(dateStr: string): string {
  const date = new Date(dateStr);
  return MONTHS_DICTIONARY[date.getMonth()];

}
