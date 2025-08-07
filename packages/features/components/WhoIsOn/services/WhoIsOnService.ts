import ApiRoutes from '../../../../constants/ApiRoutes';
import apiClient from '../../../ApiClient';
import { StaffApiResponseType, WhoIsOnResponseType } from '../../../types';

class WhoIsOnService {
  async fetchWhoIsOnData(): Promise<WhoIsOnResponseType> {
    const response = await apiClient
      .get(ApiRoutes.whoIsOn)
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
  async fetchUsersDetails(): Promise<StaffApiResponseType> {
    return await apiClient
      .get(ApiRoutes.getStaff)
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
          response: undefined,
          exceptionMessage: error.message,
        };
      });
  }
}

export default new WhoIsOnService();
