import COMMON_CONSTANTS from '../constants/CommonConstants';
import { BreakType } from '../features/types';
import STRINGS from './strings';

export const getInitials = (firstName?: string, lastName?: string): string => {
  const firstInitial =
    firstName && firstName.length > 0 ? firstName.charAt(0).toUpperCase() : '';
  const lastInitial =
    lastName && lastName.length > 0 ? lastName.charAt(0).toUpperCase() : '';
  return firstInitial + lastInitial;
};

export const stringFormat = (str?: string, ...args: string[]) => {
  return str
    ? str
        .replace(/{(\d+)}/g, (match, index) => args[index] || '')
        .replace(/\|/g, '\n')
    : '';
};

export const formatTime = (hoursWorked: string): string => {
  const [hh, mm] = hoursWorked.split(':');
  const hours = parseInt(hh, COMMON_CONSTANTS.TIME_CONSTANTS.DECIMAL);
  const minutes = parseInt(mm, COMMON_CONSTANTS.TIME_CONSTANTS.DECIMAL);
  let result = '';
  if (hours > COMMON_CONSTANTS.TIME_CONSTANTS.ZERO) {
    result += `${hours}h`;
  }
  if (minutes > COMMON_CONSTANTS.TIME_CONSTANTS.ZERO) {
    result += (result ? ' ' : '') + `${minutes}m`;
  }
  if (!result) {
    result = STRINGS.LESS_THAN_ONE_MINUTE;
  }
  return result;
};

export const formatDuration = (shiftBreaks: BreakType[]): string => {
  const currentBreak =
    shiftBreaks.length > COMMON_CONSTANTS.TIME_CONSTANTS.ZERO
      ? shiftBreaks[shiftBreaks.length - 1]
      : null;
  const startTime = currentBreak?.startTime ?? '';
  const breakDurationMs = startTime
    ? Date.now() - new Date(startTime).getTime()
    : 0;

  const totalMinutes = Math.floor(
    breakDurationMs / COMMON_CONSTANTS.TIME_CONSTANTS.MINUTE_IN_MS,
  );
  const hours = Math.floor(
    totalMinutes / COMMON_CONSTANTS.TIME_CONSTANTS.MINUTE,
  );
  const minutes = totalMinutes % COMMON_CONSTANTS.TIME_CONSTANTS.MINUTE;
  let result = '';
  if (hours > COMMON_CONSTANTS.TIME_CONSTANTS.ZERO) {
    result += `${hours}h`;
  }
  if (minutes > COMMON_CONSTANTS.TIME_CONSTANTS.ZERO) {
    result += (result ? ' ' : '') + `${minutes}m`;
  }
  if (!result) {
    result = STRINGS.LESS_THAN_ONE_MINUTE;
  }
  return result;
};

export const formatTimeFromISOString = (isoString: string): string => {
  if (!isoString) return '';
  const date = new Date(isoString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
};
