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
      .then((response) => {
        return {
          status: true,
          response: response.data.message,
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
