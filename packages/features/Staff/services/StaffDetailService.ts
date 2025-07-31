import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../apiClient';
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
  async getUser(recordId?: string): Promise<staffType | null> {
    if (!recordId) {
      throw Error;
    }

    const response = await apiClient.get(
      stringFormat(ApiRoutes.getUser, recordId),
    );
    return response.data.data;
  }

  async updateUser(recordId?: string, userData?: any) {
    if (!recordId || !userData) {
      throw Error;
    }

    const response = await apiClient.put(
      stringFormat(ApiRoutes.updateUser, recordId),
      userData,
    );
    return response.data.data;
  }

  async deleteUser(recordId?: string) {
    const response = await apiClient.post(ApiRoutes.deleteUser, {
      id: recordId,
    });
    return response.data.data;
  }

  async restoreUser(recordId?: string) {
    if (!recordId) {
      throw Error;
    }
    const response = await apiClient.post(
      stringFormat(ApiRoutes.restoreUser, recordId),
    );
    return response.data.data;
  }
}

export default new StaffDetailService();
