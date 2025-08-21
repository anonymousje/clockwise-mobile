import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';

class ForgotPasswordService {
  async requestPasswordReset(email: string) {
    return await apiClient
      .post(ApiRoutes.forgotPassword, { email })
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

export default new ForgotPasswordService();
