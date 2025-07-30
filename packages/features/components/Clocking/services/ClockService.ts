import apiClient from '../../../apiClient';
import ApiRoutes from '../../../../constants/ApiRoutes';

class ClockService {
  async clockIn() {
    const response = await apiClient.post(ApiRoutes.clockIn);
    return response;
  }

  async clockOut(data: string) {
    return await apiClient.post(ApiRoutes.clockOut, { note: data });
  }
}
export default new ClockService();
