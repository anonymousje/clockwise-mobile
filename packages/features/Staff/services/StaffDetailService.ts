import ApiRoutes from '../../../constants/ApiRoutes';
import apiClient from '../../ApiClient';
import { staffType } from '../../types';
import { stringFormat } from '../../../utils/helper';
import STRINGS from '../../../utils/strings';

class StaffDetailService {
  async getMeta() {
    const response = {
      success: true,
      data: {
        departments: [
          {
            id: 1,
            name: 'R&D',
          },
          {
            id: 2,
            name: 'Sales',
          },
          {
            id: 3,
            name: 'QA',
          },
          {
            id: 4,
            name: 'Customer Support',
          },
        ],
        jobroles: [
          {
            id: 1,
            name: 'Manager',
          },
          {
            id: 2,
            name: 'HR',
          },
          {
            id: 3,
            name: 'Software Engineer',
          },
          {
            id: 4,
            name: 'Product Honor',
          },
          {
            id: 5,
            name: 'Intern',
          },
          {
            id: 6,
            name: 'SQA',
          },
          {
            id: 7,
            name: 'Team Lead',
          },
          {
            id: 8,
            name: 'Department Head',
          },
        ],
        locations: [
          {
            id: 1,
            name: 'Pakistan',
          },
          {
            id: 2,
            name: 'Serbia',
          },
          {
            id: 3,
            name: 'USA',
          },
        ],
      },
    };
    return response.data;
  }
  async getLocation() {
    const response = await apiClient.get(ApiRoutes.getAllLocations);
    return response.data.data;
  }

  async getJobRole() {
    const response = await apiClient.get(ApiRoutes.getAllJobRoles);
    return response.data.data;
  }
  async getUser(recordId?: number) {
    if (!recordId) {
      throw Error;
    }

    return await apiClient
      .get(ApiRoutes.getStaff)
      .then((res) => {
        res.data.data.map((item: any) => {
          if (item.id === recordId) {
            const user: staffType = item;
            return {
              status: res.status,
              response: user,
              exceptionMessage: undefined,
            };
          }
        });
        return {
          status: false,
          response: null,
          exceptionMessage: STRINGS.USER_NOT_FOUND,
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

  async updateUser(recordId?: number, userData?: any) {
    if (!recordId || !userData) {
      throw Error;
    }

    const response = await apiClient.put(
      stringFormat(ApiRoutes.updateUser, String(recordId)),
      userData,
    );
    return response.data.data;
  }
}

export default new StaffDetailService();
