import apiClient from '../../ApiClient';

class TimeTrackingService {
  getTimeSheet = () => {
    return apiClient
      .get('/get-timesheet')
      .then((res) => {
        return {
          status: true,
          data: res.data.data,
          exceptionMessage: undefined,
        };
      })
      .catch((error) => {
        return {
          status: false,
          data: undefined,
          exceptionMessage: error.message,
        };
      });
  };
}

export default new TimeTrackingService();
