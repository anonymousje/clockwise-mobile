import { useState, useEffect } from 'react';
import { NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS } from '../../../constants/screens';
import apiClient from '../../authClient';
import { staffType, filterItemsType } from '../../types';
import { RootState } from '../../redux/store';
import { fetchUpdated } from '../../redux/actions/fetchUsers';

import type { staffSearchQueryType } from '../../types';

function useStaffScreen() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [modal, setModal] = useState(false);
  const [staffList, setStaffList] = useState<staffType[]>([]);
  const [cacheStaffList, setCacheStaffList] = useState<staffType[]>([]);
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);

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

    const fetchDepartment = async () => {
      return await apiClient
        .get('/department/get-all-departments')
        .then((response) => response.data.data)
        .catch((error) => {
          console.error('Error fetching department:', error);
          throw error;
        });
    };

    const fetchLocation = async () => {
      return await apiClient
        .get('/location/get-all-locations')
        .then((response) => response.data.data)
        .catch((error) => {
          console.error('Error fetching location:', error);
          throw error;
        });
    };

    const fetchJobRole = async () => {
      return await apiClient
        .get('/jobrole/get-all-jobroles')
        .then((response) => response.data.data)
        .catch((error) => {
          console.error('Error fetching job role:', error);
          throw error;
        });
    };

    const fetchData = async () => {
      const departmentData = await fetchDepartment();
      setDepartmentList(departmentData);

      const locationData = await fetchLocation();
      setLocationList(locationData);

      const jobRoleData = await fetchJobRole();
      setJobRoleList(jobRoleData);
    };

    fetchData();
  }, [updated.flag, dispatch]);

  const getStaff = async (loc?: string, dep?: string, rol?: string) => {
    const params: staffSearchQueryType = {
      location: loc,
      department: dep,
      role: rol,
    };

    const response = await apiClient.get('/user/get-all-users', { params });
    return response.data.data;
  };

  const applyFilters = async (loc?: string, dep?: string, rol?: string) => {
    const filteredData = await getStaff(loc, dep, rol);

    setCacheStaffList(filteredData);
    setStaffList(filteredData);
    setModal(false);
  };

  const filterSearch = async (text: string) => {
    setSearch(text);

    if (text) {
      const filteredData = cacheStaffList.filter(
        (item) =>
          item.firstName.toLowerCase().includes(text.toLowerCase()) ||
          item.lastName?.toLowerCase().includes(text.toLowerCase()),
      );

      setStaffList(filteredData);
    } else {
      setStaffList(cacheStaffList);
    }
  };

  function staffDetails(data: staffType) {
    navigation.navigate(SCREENS.StaffDetail, {
      recordId: data.recordId,
    });
  }

  const clearFilters = async () => {
    setSearch('');
    setLocation('');
    setDepartment('');
    setRole('');
    setStaffList(await getStaff());
  };

  function openForm() {
    navigation.navigate(SCREENS.AddEmployee);
  }

  return {
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
    departmentList,
    locationList,
    jobRolelist,
    clearFilters,
    applyFilters,
  };
}

export default useStaffScreen;
