import { useEffect, useState } from 'react';
import TimeTrackingService from '../services/TimeTrackingService';
import { NavigationProp, TimeSheetEntry } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/screens';

const useTimeTracking = () => {
  const navigation = useNavigation<NavigationProp>();

  const [refreshing, setRefreshing] = useState(false);
  const [timeSheet, setTimeSheet] = useState<TimeSheetEntry[] | null>(null);

  const fetchTimeSheet = async () => {
    const response = await TimeTrackingService.getTimeSheet();
    console.log('TimeSheet Response:', response.data);
    if (response.status) {
      setTimeSheet(response.data);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      fetchTimeSheet();
    }, 1000);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchTimeSheet();
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

  const getTimeClockDetails = (id: number) => {
    navigation.navigate(SCREENS.TimeClockDetails, { entryId: id });
  };

  return {
    approveTime,
    approveAll,
    unapproveAll,
    getTimeClockDetails,
    timeSheet,
    onRefresh,
    refreshing,
  };
};

export default useTimeTracking;
