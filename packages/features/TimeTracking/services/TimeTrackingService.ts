import apiClient from '../../ApiClient';
import ApiRoutes from '../../../constants/ApiRoutes';

class TimeTrackingService {
  getTimeSheet = (
    keyword?: string,
    location_id?: number,
    department_id?: number,
    job_role_id?: number,
  ) => {
    return apiClient
      .get('/get-timesheet', {
        params: {
          keyword,
          location_id,
          department_id,
          job_role_id,
        },
      })
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
  async getMeta() {
    const response = await apiClient
      .get(ApiRoutes.getMeta)
      .then((res) => {
        return {
          status: true,
          response: res.data.data,
          exceptionMessage: undefined,
        };
      })
      .catch((error) => {
        return {
          status: false,
          response: {},
          exceptionMessage: error.message,
        };
      });

    return response;
  }
}

export default new TimeTrackingService();
