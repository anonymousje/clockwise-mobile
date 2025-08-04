import { useState, useEffect } from 'react';
import { COLORS } from '../../../constants/theme';
import { NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS } from '../../../constants/screens';
import StaffService from '../services/StaffService';
import { staffType, filterItemsType } from '../../types';
import { RootState } from '../../../store';
import { fetchUpdated } from '../../../store/actions/fetchUsers';
import type { staffSearchQueryType } from '../../types';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const useStaffScreen = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [active, setActive] = useState(2);
  const [modal, setModal] = useState(false);
  const [staffList, setStaffList] = useState<staffType[]>([]);
  const [cacheStaffList, setCacheStaffList] = useState<staffType[]>([]);
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);

  const updated = useSelector((state: RootState) => state.updated);
  const userFromStore = useSelector((state: RootState) => state.user);

  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userFromStore?.role === COMMON_CONSTANTS.ADMIN) {
      StaffService.getStaff().then((data: staffType[]) => {
        setStaffList(
          data.map((item: staffType) => ({
            ...item,
            iconColor:
              COLORS.RANDOM_COLOR_ARRAY[
                Math.floor(Math.random() * COLORS.RANDOM_COLOR_ARRAY.length)
              ],
          })),
        );
        setCacheStaffList(
          data.map((item: staffType) => ({
            ...item,
            iconColor:
              COLORS.RANDOM_COLOR_ARRAY[
                Math.floor(Math.random() * COLORS.RANDOM_COLOR_ARRAY.length)
              ],
          })),
        );
      });

      if (updated.flag) {
        StaffService.getStaff();
        dispatch(fetchUpdated(false));
      }

      const fetchData = async () => {
        const departmentData = await StaffService.fetchDepartment();
        setDepartmentList(departmentData);

        const locationData = await StaffService.fetchLocation();
        setLocationList(locationData);

        const jobRoleData = await StaffService.fetchJobRole();
        setJobRoleList(jobRoleData);
      };

      fetchData();
    } else {
      navigation.navigate(SCREENS.Login);
    }
  }, [userFromStore?.role, updated.flag, dispatch, navigation]);

  const getStaffList = async (loc?: string, dep?: string, rol?: string) => {
    const params: staffSearchQueryType = {
      location: loc,
      department: dep,
      role: rol,
    };
    const data = await StaffService.getStaff(params);
    const customizedResponse = data.map((item: staffType) => ({
      ...item,
      iconColor:
        COLORS.RANDOM_COLOR_ARRAY[
          Math.floor(Math.random() * COLORS.RANDOM_COLOR_ARRAY.length)
        ],
    }));
    return customizedResponse;
  };

  const applyFilters = async (loc?: string, dep?: string, rol?: string) => {
    const data = await getStaffList(loc, dep, rol);
    let filteredData: staffType[] = data;
    if (active !== 2) {
      filteredData = data.filter(
        (item: staffType) => item.userStatus === Number(active),
      );
    }
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

  const staffDetails = (data: staffType) => {
    navigation.navigate(SCREENS.StaffDetail, {
      recordId: data.recordId,
    });
  };

  const clearFilters = async () => {
    setSearch('');
    setLocation('');
    setDepartment('');
    setRole('');
    setActive(2);
    setStaffList(await getStaffList());
  };

  const openForm = () => {
    navigation.navigate(SCREENS.AddEmployee);
  };

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
    active,
    setActive,
    modal,
    setModal,
    staffDetails,
    departmentList,
    locationList,
    jobRolelist,
    clearFilters,
    applyFilters,
  };
};

export default useStaffScreen;
