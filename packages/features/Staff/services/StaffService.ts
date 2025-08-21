import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';
import { staffSearchQueryType, staffType } from '../../types';

class StaffService {
  async getStaff(params?: staffSearchQueryType) {
    return await apiClient
      .get(ApiRoutes.getStaff, { params })
      .then((res) => {
        return {
          status: true,
          response: res.data.data as staffType[],
          exceptionMessage: undefined,
        };
      })
      .catch((error) => {
        return {
          status: false,
          response: [],
          exceptionMessage: error.message,
        };
      });
  }

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

export default new StaffService();
