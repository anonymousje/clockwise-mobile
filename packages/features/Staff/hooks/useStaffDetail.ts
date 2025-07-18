import { useState } from 'react';
import type { staffType } from '../../types';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp } from '../../types';
import apiClient from '../../authClient';
import { useDispatch } from 'react-redux';
import { fetchUpdated } from '../../redux/actions/fetchUsers';

export default function useStaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { data } = route.params;
  const dispatch = useDispatch();
  console.log('Staff Detail Data:', data);

  const [staffData, setStaffData] = useState<staffType>(data);
  const [editMode, setEditMode] = useState(false);

  const editStaffData = async () => {
    if (editMode) {
      console.log('Staff data updated:', staffData);
      await apiClient.put(`/user/edit-user/${staffData.recordId}`, {
        staffData,
      });
      dispatch(fetchUpdated(true));
    }

    setEditMode(!editMode);
  };

  return { editMode, staffData, setStaffData, editStaffData };
}
