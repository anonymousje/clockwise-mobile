import apiClient from '../../../apiClient';
import ApiRoutes from '../../../../constants/ApiRoutes';

class ClockService {
  async clockIn() {
    const response = await apiClient.post(ApiRoutes.clockIn);
    return response;
  }

  async clockOut() {
    return await apiClient.post(ApiRoutes.clockOut, { note: 'test' });
  }
}
export default new ClockService();
