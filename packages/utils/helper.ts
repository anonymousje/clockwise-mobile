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
    result = '0m';
  }
  return result;
};
