import { useCallback, useEffect, useState } from 'react';
import TimeTrackingService from '../services/TimeTrackingService';
import { filterItemsType, NavigationProp, TimeSheetEntry } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/screens';

const useTimeTracking = () => {
  const navigation = useNavigation<NavigationProp>();

  const [refreshing, setRefreshing] = useState(false);
  const [timeSheet, setTimeSheet] = useState<TimeSheetEntry[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filterValues, setFilterValues] = useState({
    keyword: '',
    location_id: undefined,
    department_id: undefined,
    job_role_id: undefined,
  });
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);

  const fetchTimeSheet = useCallback(async () => {
    const response = await TimeTrackingService.getTimeSheet(
      filterValues.keyword,
      filterValues.location_id,
      filterValues.department_id,
      filterValues.job_role_id,
    );
    console.log('TimeSheet Response:', response.data);
    if (response.status) {
      setTimeSheet(response.data);
    }
  }, [filterValues]);

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
    const response = fetchMetaData();
    console.log('MetaData Response:', response);
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
    console.log('Filter modal toggled, current state:', !showModal);
  };

  const getTimeClockDetails = (id: number) => {
    navigation.navigate(SCREENS.TimeClockDetails, { entryId: id });
  };

  const handlePickerChange = (value: string, field: string) => {
    setFilterValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const applyFilters = () => {
    fetchTimeSheet();
    setShowModal(false);
  };

  const clearFilters = () => {
    setFilterValues({
      keyword: '',
      location_id: undefined,
      department_id: undefined,
      job_role_id: undefined,
    });
    fetchTimeSheet();
    setShowModal(false);
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
    handlePickerChange,
    departmentList,
    locationList,
    jobRolelist,
    applyFilters,
    clearFilters,
  };
};

export default useTimeTracking;
