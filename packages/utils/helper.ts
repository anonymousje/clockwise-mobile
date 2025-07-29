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
