import ApiRoutes from '../../../constants/ApiRoutes';
import { ClockStatusResponse } from '../../types';
import apiClient from '../../ApiClient';

class ClockService {
  async getClockStatus(id: number): Promise<ClockStatusResponse> {
    return await apiClient
      .get(ApiRoutes.shiftStatus, { params: { user_id: id } })
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
