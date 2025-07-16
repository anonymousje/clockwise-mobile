import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp } from '../../types';

export default function useStaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { data } = route.params;

  const [staffData, setStaffData] = useState(data);

  function editStaffData() {
    if (editMode) {
      console.log('Staff data updated:', staffData);
    }
    setEditMode(!editMode);
  }

  console.log('Staff Detail Data:', data);
  const [editMode, setEditMode] = useState(false);
  return { data, editMode, editStaffData, staffData, setStaffData };
}
