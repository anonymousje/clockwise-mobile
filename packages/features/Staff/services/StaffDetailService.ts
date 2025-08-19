import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';
import { staffType } from '../../types';
import { stringFormat } from '../../../utils/helper';

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
  async getUser(recordId?: number): Promise<staffType | null> {
    if (!recordId) {
      throw Error;
    }

    const response = await apiClient.get(
      stringFormat(ApiRoutes.getUser, String(recordId)),
    );
    return response.data.data;
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
