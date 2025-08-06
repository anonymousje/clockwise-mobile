import ApiRoutes from '../../../constants/ApiRoutes';
import {
  ClockStatusResponse,
  BreakStatusResponse,
  ApiResponseType,
} from '../../types';
import apiClient from '../../ApiClient';

class ClockService {
  async getClockStatus(): Promise<ClockStatusResponse> {
    return await apiClient
      .get(ApiRoutes.shiftStatus)
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

  async getBreakStatus(): Promise<BreakStatusResponse> {
    return await apiClient
      .get(ApiRoutes.breakStatus)
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

  async handleClockOut(note: string): Promise<ApiResponseType> {
    return await apiClient
      .post(ApiRoutes.clockOut, { data: note })
      .then(() => {
        return {
          status: true,
          response: 'Clocked out successfully',
          exceptionMessage: undefined,
        };
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}

export default new ClockService();
