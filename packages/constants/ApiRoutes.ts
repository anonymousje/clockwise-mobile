const ApiRoutes = {
  BaseURL: 'https://web.usmank.site',
  forgotPassword: '/forgot-password',
  newPassword: '/reset-password',
  login: '/login',
  logout: '/logout',
  addEmployee: '/add-user',
  getStaff: '/get-users',
  getMeta: '/get-meta',
  updateUser: '/users/{0}',
  clockOperation: '/clock',
  addNote: '/add-note',
  clockOut: '/timeentry/clock-out',
  break: '/break',
  shiftStatus: '/clock/status',
  breakStatus: '/timeentry/get-shift-breaks-status',
  whoIsOn: '/timeentry/whos-on',
};

export default ApiRoutes;
