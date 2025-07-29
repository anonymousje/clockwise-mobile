import apiClient from '../../apiClient';

class NewPasswordService {
  async resetPassword(email: string, token: string, newPassword: string) {
    const encodedToken = encodeURIComponent(token);
    const response = await apiClient.post('/Auth/reset-password', {
      email,
      token: encodedToken,
      newPassword,
    });
    return response.data.data;
  }
}

export default new NewPasswordService();
