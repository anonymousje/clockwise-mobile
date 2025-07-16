import { useState, useEffect } from 'react';
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
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [modal, setModal] = useState(false);
  const [staffList, setStaffList] = useState<staffType[]>([]);
  const [cacheStaffList, setCacheStaffList] = useState<staffType[]>([]);

  const updated = useSelector((state: RootState) => state.updated);
  const navigation = useNavigation<NavigationProp>();
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
  }, [updated.flag, dispatch]);

  const getStaff = async (loc?: string, dep?: string, rol?: string) => {
    const params: Record<string, string> = {};
    if (loc) params.location = loc;
    if (dep) params.department = dep;
    if (rol) params.role = rol;

    const response = await apiClient.get('/user/all-users', { params });
    return response.data;
  };

  function openForm() {
    navigation.navigate(SCREENS.AddEmployee);
  }

  const filterSearch = async (
    text: string,
    loc?: string,
    dep?: string,
    rol?: string,
  ) => {
    console.log('Search text:', text);
    console.log('Location:', loc);
    console.log('Department:', dep);
    console.log('Role:', rol);

    setSearch(text);

    if (text) {
      const filteredData = cacheStaffList.filter(
        (item: staffType) =>
          item.firstName.toLowerCase().includes(text.toLowerCase()) ||
          item.lastName?.toLowerCase().includes(text.toLowerCase()),
      );

      setStaffList(filteredData);
    } else if (loc || dep || rol) {
      const filteredData = await getStaff(loc, dep, rol);

      setStaffList(filteredData);
    } else {
      setStaffList(cacheStaffList);
    }

    setModal(false);
  };

  function staffDetails(data: staffType) {
    console.log('Selected staff details:', data);
    navigation.navigate(SCREENS.StaffDetail, {
      data,
    });
  }

  return {
    showModal,
    setShowModal,
    getStaff,
    openForm,
    staffList,
    search,
    filterSearch,
    location,
    setLocation,
    department,
    setDepartment,
    role,
    setRole,
    modal,
    setModal,
    staffDetails,
  };
}

export default useStaffScreen;
