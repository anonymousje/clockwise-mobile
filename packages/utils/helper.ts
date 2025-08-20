import COMMON_CONSTANTS from '../constants/CommonConstants';
import { breakArrayType, BreakType } from '../features/types';
import STRINGS from './strings';

export const getInitials = (name?: string): string => {
  const [firstName, lastName] = name ? name.split(COMMON_CONSTANTS.SPACE) : [];
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

export const formatTime = (start: string, end: string): string => {
  if (!start || !end) return '';
  const startDate = new Date(start.replace(' ', 'T'));
  const endDate = new Date(end.replace(' ', 'T'));
  let diffMs = endDate.getTime() - startDate.getTime();
  if (isNaN(diffMs) || diffMs < 0) return '';
  const totalMinutes = Math.floor(
    diffMs / COMMON_CONSTANTS.TIME_CONSTANTS.MINUTE_IN_MS,
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
  let date: Date;
  if (isoString.includes('+')) {
    date = new Date(isoString);
  } else {
    date = new Date(isoString);
    date.setHours(date.getHours() + 5);
  }
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
};

export const formatDateFromISOString = (isoString: string): string => {
  if (!isoString) return '';
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, '0');
  const monthAbbr = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day}. ${monthAbbr}, ${year}`;
};

export const formatBreakGaps = (breaks: BreakType[]): breakArrayType[] => {
  if (!breaks || breaks.length === COMMON_CONSTANTS.TIME_CONSTANTS.ZERO) {
    return [];
  }

  return breaks.map((b) => ({
    startTime: formatTimeFromISOString(b.startTime),
    endTime: b.endTime ? formatTimeFromISOString(b.endTime) : '',
  }));
};
