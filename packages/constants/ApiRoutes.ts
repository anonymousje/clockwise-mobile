const ApiRoutes = {
  BaseURL: 'https://web.usmank.site',
  forgotPassword: '/forgot-password',
  newPassword: '/reset-password',
  login: '/login',
  logout: '/logout',
  addEmployee: '/add-user',
  getStaff: '/get-users',
  getMeta: '/get-meta',
  getUser: '/user/get-user/{0}',
  updateUser: '/users/{0}',
  clockOperation: '/clock',
  addNote: '/add-note',
  break: '/break',
  shiftStatus: '/clock/status',
  whoIsOn: '/timeentry/whos-on',
  updateTimeEntryStatus: '/timesheet-status',
  getTimeSheet: '/get-timesheet',
};

export default ApiRoutes;
