import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';

class AddEmployeeService {
  async addEmployee(userData: any) {
    return await apiClient
      .post(ApiRoutes.addEmployee, userData)
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
          response: null,
          exceptionMessage: error.message,
        };
      });
  }
}

export default new AddEmployeeService();
