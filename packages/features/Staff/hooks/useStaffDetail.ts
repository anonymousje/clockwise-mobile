import { useState, useEffect } from 'react';
import type { filterItemsType, staffType } from '../../types';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp } from '../../types';
import apiClient from '../../authClient';
import { useDispatch } from 'react-redux';
import { fetchUpdated } from '../../redux/actions/fetchUsers';

export default function useStaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { recordId } = route.params;
  const dispatch = useDispatch();

  console.log('Staff Detail Data:', recordId);

  const [editMode, setEditMode] = useState(false);

  const [staffData, setStaffData] = useState<staffType | null>(null);
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);

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
    console.log('Staff data updated:', staffData);

    if (editMode) {
      await apiClient.put(`/user/edit-user/${staffData?.recordId}`, {
        firstName: staffData?.firstName,
        lastName: staffData?.lastName,
        email: staffData?.email,
        phoneNumber: staffData?.phoneNumber,
        username: staffData?.username,
        address: staffData?.address,
        nickname: staffData?.nickname,
        userCode: staffData?.userCode,
        status: staffData?.status,
        role: staffData?.role,
        departmentRecordId: staffData?.departmentRecordId,
        locationRecordId: staffData?.locationRecordId,
        jobRoleRecordId: staffData?.jobRoleRecordId,
        departmentName: staffData?.departmentName,
        locationName: staffData?.locationName,
        jobRoleName: staffData?.jobRoleName,
      });
      dispatch(fetchUpdated(true));
    }

    setEditMode(!editMode);
  };

  return {
    editMode,
    staffData,
    setStaffData,
    editStaffData,
    departmentList,
    locationList,
    jobRolelist,
  };
}
