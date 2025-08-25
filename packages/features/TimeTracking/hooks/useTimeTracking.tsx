import { useEffect, useState } from 'react';
import TimeTrackingService from '../services/TimeTrackingService';
import { TimeSheetEntry } from '../../types';

const useTimeTracking = () => {
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
  };

  const approveAll = () => {
    console.log('All time entries approved');
  };

  const unapproveAll = () => {
    console.log('All time entries unapproved');
  };

  return {
    approveTime,
    approveAll,
    unapproveAll,
    timeSheet,
    onRefresh,
    refreshing,
  };
};

export default useTimeTracking;
