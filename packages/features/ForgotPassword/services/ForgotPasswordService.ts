import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../apiClient';

class ForgotPasswordService {
  async requestPasswordReset(email: string) {
    const response = await apiClient.post(ApiRoutes.forgotPassword, { email });
    return response.data.data;
  }
}

export default new ForgotPasswordService();
