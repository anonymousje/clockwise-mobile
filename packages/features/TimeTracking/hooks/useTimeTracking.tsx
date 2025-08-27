import { useCallback, useEffect, useState } from 'react';
import TimeTrackingService from '../services/TimeTrackingService';
import { filterItemsType, NavigationProp, TimeSheetEntry } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/screens';

const useTimeTracking = () => {
  const navigation = useNavigation<NavigationProp>();

  const [refreshing, setRefreshing] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeSheet, setTimeSheet] = useState<TimeSheetEntry[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState();
  const [department, setDepartment] = useState();
  const [role, setRole] = useState();
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);

  const fetchTimeSheet = useCallback(async () => {
    setLoading(true);
    const response = await TimeTrackingService.getTimeSheet(
      keyword,
      location,
      department,
      role,
    );
    setLoading(false);
    console.log('TimeSheet Response:', response.data);
    if (response.status) {
      setTimeSheet(response.data);
    }
  }, [location, department, role, keyword]);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(async () => {
      setRefreshing(false);
      fetchTimeSheet();
      fetchMetaData();
    }, 1000);
    setRefreshing(false);
  };

  const fetchMetaData = async () => {
    const response = await TimeTrackingService.getMeta();
    if (response.status) {
      setDepartmentList(response.response.departments);
      setLocationList(response.response.locations);
      setJobRoleList(response.response.jobroles);
    } else {
      console.error(response.exceptionMessage);
    }
  };

  useEffect(() => {
    fetchTimeSheet();
    fetchMetaData();
  }, [fetchTimeSheet]);

  const approveTime = (id: number) => {
    console.log('Time approved for entry id:', id);
    fetchTimeSheet();
  };

  const approveAll = () => {
    console.log('All time entries approved');
    fetchTimeSheet();
  };

  const unapproveAll = () => {
    console.log('All time entries unapproved');
    fetchTimeSheet();
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const getTimeClockDetails = (id: number) => {
    navigation.navigate(SCREENS.TimeClockDetails, { entryId: id });
  };

  const applyFilters = () => {
    console.log('Filters applied:', { location, department, role });
    fetchTimeSheet();
    setShowModal(false);
  };

  const clearFilters = () => {
    setLocation(undefined);
    setDepartment(undefined);
    setRole(undefined);
    setKeyword('');
    fetchTimeSheet();
  };

  const searchKeyword = (text: string) => {
    setKeyword(text);
    fetchTimeSheet();
  };

  return {
    approveTime,
    approveAll,
    unapproveAll,
    getTimeClockDetails,
    timeSheet,
    onRefresh,
    refreshing,
    showModal,
    toggleModal,
    departmentList,
    locationList,
    jobRolelist,
    applyFilters,
    location,
    setLocation,
    department,
    role,
    setDepartment,
    setRole,
    clearFilters,
    keyword,
    searchKeyword,
    loading,
  };
};

export default useTimeTracking;
