import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp } from '../../types';

export default function useStaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { data } = route.params;

  console.log('Staff Detail Data:', data);

  const [staffData, setStaffData] = useState(data);
  const [editMode, setEditMode] = useState(false);

  function editStaffData() {
    if (editMode) {
      console.log('Staff data updated:', staffData);
      //TODO: API call here
    }
    setEditMode(!editMode);
  }

  return { editMode, staffData, setStaffData, editStaffData };
}
