import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';
import { staffSearchQueryType, staffType } from '../../types';

class StaffService {
  async getStaff(params?: staffSearchQueryType) {
    return await apiClient
      .get(ApiRoutes.getStaff, { params })
      .then((res) => {
        return {
          status: true,
          response: res.data.data as staffType[],
          exceptionMessage: undefined,
        };
      })
      .catch((error) => {
        return {
          status: false,
          response: [],
          exceptionMessage: error.message,
        };
      });
  }

  async fetchDepartment() {
    return await apiClient
      .get(ApiRoutes.getAllDepartments)
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
          response: [],
          exceptionMessage: error.message,
        };
      });
  }
  async getMeta() {
    const response = await apiClient
      .get(ApiRoutes.getMeta)
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
          response: {},
          exceptionMessage: error.message,
        };
      });

    return response;
  }
  async fetchLocation() {
    return await apiClient
      .get(ApiRoutes.getAllLocations)
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
          response: [],
          exceptionMessage: error.message,
        };
      });
  }

  async fetchJobRole() {
    return await apiClient
      .get(ApiRoutes.getAllJobRoles)
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
          response: [],
          exceptionMessage: error.message,
        };
      });
  }
}

export default new StaffService();
