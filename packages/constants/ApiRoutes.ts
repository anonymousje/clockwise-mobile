const ApiRoutes = {
  BaseURL: 'https://web.usmank.site',
  forgotPassword: '/forgot-password',
  newPassword: '/reset-password',
  login: '/login',
  addEmployee: '/user/create-user',
  getStaff: '/get-users',
  getAllDepartments: '/department/get-all-departments',
  getAllLocations: '/location/get-all-locations',
  getAllJobRoles: '/jobrole/get-all-jobroles',
  getUser: '/user/get-user/{0}',
  updateUser: '/user/edit-user/{0}',
  deleteUser: '/user/delete-user',
  restoreUser: '/user/restore-user/{0}',
  clockIn: '/timeentry/clock-in',
  clockOut: '/timeentry/clock-out',
  startBreak: '/timeentry/add-break',
  endBreak: '/timeentry/end-break',
  shiftStatus: '/timeentry/get-shift-status',
  breakStatus: '/timeentry/get-shift-breaks-status',
  whoIsOn: '/timeentry/whos-on',
};

export default ApiRoutes;
