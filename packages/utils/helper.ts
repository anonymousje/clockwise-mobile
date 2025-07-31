import { BreakType } from '../features/types';

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

export const timeFormatter = (hoursWorked: string): string => {
  const [hh, mm] = hoursWorked.split(':');
  const hours = parseInt(hh, 10);
  const minutes = parseInt(mm, 10);
  let result = '';
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += (result ? ' ' : '') + `${minutes}m`;
  }
  if (!result) {
    result = 'Less than 1m';
  }
  return result;
};

export const formatDuration = (shiftBreaks: BreakType[]): string => {
  const currentBreak =
    shiftBreaks.length > 0 ? shiftBreaks[shiftBreaks.length - 1] : null;
  const startTime = currentBreak?.startTime ?? '';
  const breakDurationMs = startTime
    ? Date.now() - new Date(startTime).getTime()
    : 0;

  const totalMinutes = Math.floor(breakDurationMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  let result = '';
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += (result ? ' ' : '') + `${minutes}m`;
  }
  if (!result) {
    result = 'Less than 1m';
  }
  return result;
};
