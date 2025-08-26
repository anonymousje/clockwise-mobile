import { useEffect, useState } from 'react';
import TimeTrackingService from '../services/TimeTrackingService';
import { filterItemsType, NavigationProp, TimeSheetEntry } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/screens';

const useTimeTracking = () => {
  const navigation = useNavigation<NavigationProp>();

  const [refreshing, setRefreshing] = useState(false);
  const [timeSheet, setTimeSheet] = useState<TimeSheetEntry[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [departmentList, setDepartmentList] = useState<filterItemsType[]>([]);
  const [locationList, setLocationList] = useState<filterItemsType[]>([]);
  const [jobRolelist, setJobRoleList] = useState<filterItemsType[]>([]);
  const fetchTimeSheet = async (
    keyword?: string,
    location_id?: number,
    department_id?: number,
    job_role_id?: number,
  ) => {
    const response = await TimeTrackingService.getTimeSheet(
      keyword,
      location_id,
      department_id,
      job_role_id,
    );
    console.log('TimeSheet Response:', response.data);
    if (response.status) {
      setTimeSheet(response.data);
    }
  };

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
  }, []);

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
    console.log(`Picker changed: ${field} = ${value}`);
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
  };
};

export default useTimeTracking;
