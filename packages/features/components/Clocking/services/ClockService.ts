import apiClient from '../../../ApiClient';
import ApiRoutes from '../../../../constants/ApiRoutes';

class ClockService {
  async clockOperation(user_id?: number | string, action?: string) {
    return await apiClient
      .post(ApiRoutes.clockOperation, { user_id: user_id, action: action })
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
  async getClockStatus(user_id?: number | string) {
    return await apiClient
      .get(ApiRoutes.shiftStatus, { params: { user_id: user_id } })
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

  async getBreakStatus() {
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

  async startBreak() {
    return await apiClient
      .post(ApiRoutes.startBreak)
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

  async endBreak() {
    return await apiClient
      .post(ApiRoutes.endBreak)
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
