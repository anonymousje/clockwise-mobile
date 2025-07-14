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
  const [cacheStaffList, setCacheStaffList] = useState<staffType[]>([]);

  const navigation = useNavigation<NavigationProp>();

  const getStaff = useCallback(async () => {
    const response = await apiClient.get('/user/all-users');
    return response.data;
  }, []);

  const updated = useSelector((state: RootState) => state.updated);
  const dispatch = useDispatch();

  useEffect(() => {
    getStaff().then((data: staffType[]) => {
      setStaffList(data);
      setCacheStaffList(data);
    });

    if (updated.flag) {
      getStaff();
      dispatch(fetchUpdated(false));
    }
  }, [getStaff, updated.flag, dispatch]);

  function openForm() {
    navigation.navigate(SCREENS.AddEmployee);
  }

  const [search, setSearch] = useState('');

  const filterSearch = (text: string) => {
    setSearch(text);

    if (text) {
      const filteredData = staffList.filter((item: staffType) =>
        item.firstName.toLowerCase().includes(text.toLowerCase()),
      );
      setStaffList(filteredData);
    } else {
      setStaffList(cacheStaffList);
    }
  };

  return {
    showModal,
    setShowModal,
    getStaff,
    expandedId,
    setExpandedId,
    openForm,
    staffList,
    search,
    filterSearch,
  };
}

export default useStaffScreen;
