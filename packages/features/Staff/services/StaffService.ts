import apiClient from '../../apiClient';
import { staffType, staffSearchQueryType, filterItemsType } from '../../types';

class StaffService {
  async getStaff(params?: staffSearchQueryType): Promise<staffType[]> {
    const response = await apiClient.get('/user/get-all-users', { params });
    return response.data.data;
  }

  async fetchDepartment(): Promise<filterItemsType[]> {
    const response = await apiClient.get('/department/get-all-departments');
    return response.data.data;
  }

  async fetchLocation(): Promise<filterItemsType[]> {
    const response = await apiClient.get('/location/get-all-locations');
    return response.data.data;
  }

  async fetchJobRole(): Promise<filterItemsType[]> {
    const response = await apiClient.get('/jobrole/get-all-jobroles');
    return response.data.data;
  }
}

export default new StaffService();
