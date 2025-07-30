import apiClient from '../../../apiClient';
import ApiRoutes from '../../../../constants/ApiRoutes';
import { ClockStatusResponse } from '../../../types';

class ClockService {
  async clockIn() {
    const response = await apiClient
      .post(ApiRoutes.clockIn)
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

  async clockOut(data: string) {
    return await apiClient
      .post(ApiRoutes.clockOut, { note: data })
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
  }
  async getClockStatus(): Promise<ClockStatusResponse> {
    return await apiClient
      .get('/timeentry/get-shift-status')
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
  }
}
export default new ClockService();
