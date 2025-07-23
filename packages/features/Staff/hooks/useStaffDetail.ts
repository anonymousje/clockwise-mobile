import { useState, useEffect } from 'react';
import type { filterItemsType, staffType } from '../../types';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp, errorType } from '../../types';
import apiClient from '../../authClient';
import { useDispatch } from 'react-redux';
import { fetchUpdated } from '../../redux/actions/fetchUsers';
import { z } from 'zod';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types';

export default function useStaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { recordId } = route.params;
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  console.log('Staff Detail Data:', recordId);

  const [editMode, setEditMode] = useState(false);

  const [staffData, setStaffData] = useState<staffType | null>(null);
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);
  const [validationErrors, setValidationErrors] = useState<errorType>({});

  const staffSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email'),
  });

  useEffect(() => {
    if (!recordId) {
      console.error('No recordId provided in params');
      return;
    }

    const fetchDepartment = async () => {
      return await apiClient
        .get('/department/get-all-departments')
        .then((response) => response.data.data)
        .catch((error) => {
          console.error('Error fetching department:', error);
          throw error;
        });
    };

    const fetchLocation = async () => {
      return await apiClient
        .get('/location/get-all-locations')
        .then((response) => response.data.data)
        .catch((error) => {
          console.error('Error fetching location:', error);
          throw error;
        });
    };

    const fetchJobRole = async () => {
      return await apiClient
        .get('/jobrole/get-all-jobroles')
        .then((response) => response.data.data)
        .catch((error) => {
          console.error('Error fetching job role:', error);
          throw error;
        });
    };

    const fetchUser = async (): Promise<staffType | null> => {
      return await apiClient
        .get(`/user/get-user/${recordId}`)
        .then((response) => response.data.data)
        .catch((error) => {
          console.error('Error fetching user:', error);
          throw error;
        });
    };

    const fetchData = async () => {
      const data = await fetchUser();
      setStaffData(data);

      const departmentData = await fetchDepartment();
      setDepartmentList(departmentData);

      const locationData = await fetchLocation();
      setLocationList(locationData);

      const jobRoleData = await fetchJobRole();
      setJobRoleList(jobRoleData);
    };

    fetchData();
  }, [recordId]);

  const editStaffData = async () => {
    if (editMode) {
      const validation = staffSchema.safeParse(staffData);

      if (!validation.success) {
        const errors: errorType = {};

        validation.error.errors.forEach((err) => {
          if (err.path.length > 0) {
            errors[err.path[0]] = err.message;
          }
        });

        setValidationErrors(errors);
        return;
      }

      setValidationErrors({});
      try {
        console.log('Staff data updated:', staffData);
        await apiClient.put(`/user/edit-user/${staffData?.recordId}`, {
          firstName: staffData?.firstName,
          lastName: staffData?.lastName,
          email: staffData?.email,
          phoneNumber: staffData?.phoneNumber,
          username: staffData?.username,
          address: staffData?.address,
          nickname: staffData?.nickname,
          userCode: staffData?.userCode,
          userStatus: staffData?.userStatus,
          role: staffData?.role,
          departmentRecordId: staffData?.departmentRecordId,
          locationRecordId: staffData?.locationRecordId,
          jobRoleRecordId: staffData?.jobRoleRecordId,
          departmentName: staffData?.departmentName,
          locationName: staffData?.locationName,
          jobRoleName: staffData?.jobRoleName,
        });

        dispatch(fetchUpdated(true));
      } catch (e: any) {
        console.log('Error updating staff data:', e.response?.data);

        const errors: errorType = {};

        if (e.response && e.response.data) {
          const msg = e.response.data.errors[0];

          if (msg.toLowerCase().includes('email')) {
            errors.email = msg;
          } else if (msg.toLowerCase().includes('username')) {
            errors.username = msg;
          } else if (msg.toLowerCase().includes('usercode')) {
            errors.userCode = msg;
          } else {
            errors.general = 'Failed to update staff data';
          }
        }

        setValidationErrors(errors);
        return;
      }
      navigation.goBack();
    }

    setEditMode(!editMode);
  };

  function deleteUser() {
    apiClient.post(`/user/delete-user`, { id: staffData?.recordId });
    dispatch(fetchUpdated(true));
    navigation.goBack();
  }
  return {
    editMode,
    staffData,
    setStaffData,
    editStaffData,
    departmentList,
    locationList,
    jobRolelist,
    validationErrors,
    deleteUser,
  };
}
