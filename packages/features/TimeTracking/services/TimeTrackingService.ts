import apiClient from '../../ApiClient';
import ApiRoutes from '../../../constants/ApiRoutes';

class TimeTrackingService {
  getTimeSheet = (
    keyword?: string,
    location_id?: number,
    department_id?: number,
    job_role_id?: number,
    start_date?: string | null,
    end_date?: string | null,
  ) => {
    return apiClient
      .get(ApiRoutes.getTimeSheet, {
        params: {
          keyword,
          location_id,
          department_id,
          job_role_id,
          start_date,
          end_date,
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
  async updateTimeEntryStatus(id: number, status: boolean) {
    const response = await apiClient
      .post(ApiRoutes.updateTimeEntryStatus, {
        id,
        status,
      })
      .then((res) => {
        return {
          status: true,
          response: res.data.message,
          exceptionMessage: undefined,
        };
      })
      .catch((error) => {
        return {
          status: false,
          response: undefined,
          exceptionMessage: error.message,
        };
      });

    return response;
  }
}

export default new TimeTrackingService();
