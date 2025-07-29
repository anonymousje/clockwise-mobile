import apiClient from '../../apiClient';
import { staffType } from '../../types';

class StaffDetailService {
  async getDepartment() {
    const response = await apiClient.get('/department/get-all-departments');
    return response.data.data;
  }

  async getLocation() {
    const response = await apiClient.get('/location/get-all-locations');
    return response.data.data;
  }

  async getJobRole() {
    const response = await apiClient.get('/jobrole/get-all-jobroles');
    return response.data.data;
  }
  async getUser(recordId?: string): Promise<staffType | null> {
    const response = await apiClient.get(`/user/get-user/${recordId}`);
    return response.data.data;
  }

  async updateUser(recordId?: string, userData?: any) {
    if (!recordId || !userData) {
      throw Error;
    }
    const response = await apiClient.put(
      `/user/edit-user/${recordId}`,
      userData,
    );
    return response.data.data;
  }

  async deleteUser(recordId?: string) {
    const response = await apiClient.delete(`/user/delete-user/${recordId}`);
    return response.data.data;
  }

  async restoreUser(recordId?: string) {
    const response = await apiClient.post(`/user/restore-user/${recordId}`);
    return response.data.data;
  }
}

export default new StaffDetailService();
