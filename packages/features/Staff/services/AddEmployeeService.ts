import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../apiClient';

class AddEmployeeService {
  async addEmployee(userData: any) {
    const response = await apiClient.post(ApiRoutes.addEmployee, userData);
    return response.data.data;
  }
}

export default new AddEmployeeService();
