import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';

class NewPasswordService {
  async resetPassword(email: string, token: string, newPassword: string) {
    const encodedToken = encodeURIComponent(token);
    const response = await apiClient.post(ApiRoutes.newPassword, {
      email,
      token: encodedToken,
      newPassword,
    });
    return response.data.data;
  }
}

export default new NewPasswordService();
