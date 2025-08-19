import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';
import { staffType } from '../../types';
import { stringFormat } from '../../../utils/helper';
import STRINGS from '../../../utils/strings';

class StaffDetailService {
  async getDepartment() {
    const response = await apiClient.get(ApiRoutes.getAllDepartments);
    return response.data.data;
  }

  async getLocation() {
    const response = await apiClient.get(ApiRoutes.getAllLocations);
    return response.data.data;
  }

  async getJobRole() {
    const response = await apiClient.get(ApiRoutes.getAllJobRoles);
    return response.data.data;
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
