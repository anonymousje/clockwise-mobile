import apiClient from '../../ApiClient';

class TimeTrackingService {
  getTimeSheet = () => {
    return apiClient.get('/get-timesheet');
  };
}

export default new TimeTrackingService();
