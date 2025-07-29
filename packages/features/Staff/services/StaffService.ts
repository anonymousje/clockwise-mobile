import apiClient from '../../apiClient';
import { staffSearchQueryType } from '../../types';

class StaffService {
  async getStaff(params?: staffSearchQueryType) {
    const response = await apiClient.get('/user/get-all-users', { params });
    return response.data.data;
  }

  async fetchDepartment() {
    const response = await apiClient.get('/department/get-all-departments');
    return response.data.data;
  }

  async fetchLocation() {
    const response = await apiClient.get('/location/get-all-locations');
    return response.data.data;
  }

  async fetchJobRole() {
    const response = await apiClient.get('/jobrole/get-all-jobroles');
    return response.data.data;
  }
}

export default new StaffService();
