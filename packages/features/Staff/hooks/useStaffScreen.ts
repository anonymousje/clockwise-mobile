import { useState } from 'react';
import { NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/screens';
import apiClient from '../../authClient';

function useStaffScreen() {
  const [showModal, setShowModal] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const navigation = useNavigation<NavigationProp>();

  const getStaff = async () => {
    const response = await apiClient.get('/user/all-users');

    return response.data;
  };
  function openForm() {
    navigation.navigate(SCREENS.AddEmployee);
  }

  return {
    showModal,
    setShowModal,
    getStaff,
    expandedId,
    setExpandedId,
    openForm,
  };
}

export default useStaffScreen;
