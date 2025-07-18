import { useState, useEffect } from 'react';
import type { staffType } from '../../types';
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

  useEffect(() => {
    if (!recordId) {
      console.error('No recordId provided in params');
      return;
    }

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
    };

    fetchData();
  }, [recordId]);

  const editStaffData = async () => {
    if (editMode) {
      console.log('Staff data updated:', staffData);
      await apiClient.put(`/user/edit-user/${staffData?.recordId}`, {
        staffData,
      });
      dispatch(fetchUpdated(true));
    }

    setEditMode(!editMode);
  };

  return { editMode, staffData, setStaffData, editStaffData };
}
