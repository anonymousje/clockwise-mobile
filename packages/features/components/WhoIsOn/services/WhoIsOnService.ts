import ApiRoutes from '../../../../constants/ApiRoutes';
import apiClient from '../../../ApiClient';
import { WhoIsOnResponseType } from '../../../types';

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
}

export default new WhoIsOnService();
