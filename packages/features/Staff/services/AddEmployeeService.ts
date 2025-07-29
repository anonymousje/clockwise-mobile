import apiClient from '../../apiClient';

class AddEmployeeService {
  async addEmployee(userData: any) {
    const response = await apiClient.post('/user/create-user', userData);
    return response.data.data;
  }
}

export default new AddEmployeeService();
