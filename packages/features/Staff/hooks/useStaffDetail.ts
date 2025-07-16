import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { StaffDetailNavigationProp } from '../../types';

export default function useStaffDetail() {
  const route = useRoute<StaffDetailNavigationProp>();
  const { data } = route.params;

  const [staffData, setStaffData] = useState(data);

  console.log('Staff Detail Data:', data);
  const [editMode, setEditMode] = useState(false);
  return { data, editMode, setEditMode, staffData, setStaffData };
}
