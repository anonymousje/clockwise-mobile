import apiClient from '../../apiClient';

class ForgotPasswordService {
  async requestPasswordReset(email: string) {
    const response = await apiClient.post('/Auth/forgot-password', { email });
    return response.data.data;
  }
}

export default new ForgotPasswordService();
