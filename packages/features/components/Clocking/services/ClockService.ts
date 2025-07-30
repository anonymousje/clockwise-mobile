import apiClient from '../../../apiClient';
import ApiRoutes from '../../../../constants/ApiRoutes';

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
}
export default new ClockService();
