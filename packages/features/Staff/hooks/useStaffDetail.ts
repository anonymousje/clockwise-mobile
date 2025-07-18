import { useState } from 'react';
import type { staffType } from '../../types';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp } from '../../types';
import apiClient from '../../authClient';

export default function useStaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { data } = route.params;
  console.log('Staff Detail Data:', data);

  const [staffData, setStaffData] = useState<staffType>(data);
  const [editMode, setEditMode] = useState(false);

  const editStaffData = async () => {
    if (editMode) {
      console.log('Staff data updated:', staffData);
      //TODO: API call here
      await apiClient.put(`/user/edit-user/${staffData.recordId}`, {
        staffData,
      });
    }
    setEditMode(!editMode);
  };

  return { editMode, staffData, setStaffData, editStaffData };
}
