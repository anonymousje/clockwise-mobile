import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';
import { staffType } from '../../types';
import { stringFormat } from '../../../utils/helper';
import STRINGS from '../../../utils/strings';

class StaffDetailService {
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

  async getUser(recordId?: number) {
    if (!recordId) {
      throw Error;
    }

    return await apiClient
      .get(ApiRoutes.getStaff)
      .then((res) => {
        res.data.data.map((item: any) => {
          if (item.id === recordId) {
            const user: staffType = item;
            return {
              status: res.status,
              response: user,
              exceptionMessage: undefined,
            };
          }
        });
        return {
          status: false,
          response: null,
          exceptionMessage: STRINGS.USER_NOT_FOUND,
        };
      })
      .catch((error) => {
        return {
          status: false,
          response: null,
          exceptionMessage: error.message,
        };
      });
  }

  async updateUser(recordId?: number, userData?: any) {
    if (!recordId || !userData) {
      throw Error;
    }

    const response = await apiClient.put(
      stringFormat(ApiRoutes.updateUser, String(recordId)),
      userData,
    );
    return response.data.data;
  }
}

export default new StaffDetailService();
