import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';

class NewPasswordService {
  async resetPassword(token: string, newPassword: string) {
    const encodedToken = encodeURIComponent(token);
    return await apiClient
      .post(ApiRoutes.newPassword, {
        token: encodedToken,
        new_password: newPassword,
      })
      .then((res) => {
        return {
          status: true,
          response: res.data.message,
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

export default new NewPasswordService();
