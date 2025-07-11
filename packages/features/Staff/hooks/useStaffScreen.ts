import { useState, useCallback, useEffect } from 'react';
import { NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS } from '../../../constants/screens';
import apiClient from '../../authClient';
import { staffType } from '../../types';
import { RootState } from '../../redux/store';
import { fetchUpdated } from '../../redux/actions/fetchUsers';

function useStaffScreen() {
  const [showModal, setShowModal] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [staffList, setStaffList] = useState<staffType[]>([]);

  const navigation = useNavigation<NavigationProp>();

  const getStaff = useCallback(async () => {
    const response = await apiClient.get('/user/all-users');
    return response.data;
  }, []);

  const updated = useSelector((state: RootState) => state.updated);
  const dispatch = useDispatch();

  useEffect(() => {
    getStaff().then((data: staffType[]) => setStaffList(data));
    if (updated.flag) {
      getStaff();
      dispatch(fetchUpdated(false));
    }
  }, [getStaff, updated.flag, dispatch]);

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
    staffList,
  };
}

export default useStaffScreen;
