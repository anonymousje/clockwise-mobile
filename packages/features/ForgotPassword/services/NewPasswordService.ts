import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';

class NewPasswordService {
  async resetPassword(token: string, newPassword: string) {
    const encodedToken = encodeURIComponent(token);
    const response = await apiClient.post(ApiRoutes.newPassword, {
      token: encodedToken,
      new_password: newPassword,
    });
    return response.data.data;
  }
}

export default new NewPasswordService();
