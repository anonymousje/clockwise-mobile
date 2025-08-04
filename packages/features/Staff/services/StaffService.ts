import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';
import { staffSearchQueryType } from '../../types';

class StaffService {
  async getStaff(params?: staffSearchQueryType) {
    const response = await apiClient.get(ApiRoutes.getStaff, { params });
    return response.data.data;
  }

  async fetchDepartment() {
    const response = await apiClient.get(ApiRoutes.getAllDepartments);
    return response.data.data;
  }

  async fetchLocation() {
    const response = await apiClient.get(ApiRoutes.getAllLocations);
    return response.data.data;
  }

  async fetchJobRole() {
    const response = await apiClient.get(ApiRoutes.getAllJobRoles);
    return response.data.data;
  }
}

export default new StaffService();
