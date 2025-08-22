import { useEffect, useState } from 'react';
import TimeTrackingService from '../services/TimeTrackingService';
import { TimeSheetEntry } from '../../types';

const useTimeTracking = () => {
  const [timeSheet, setTimeSheet] = useState<TimeSheetEntry[] | null>(null);
  useEffect(() => {
    const fetchTimeSheet = async () => {
      const response = await TimeTrackingService.getTimeSheet();
      console.log('TimeSheet Response:', response.data);
      if (response.status) {
        setTimeSheet(response.data);
      }
    };
    fetchTimeSheet();
  }, []);

  const approveTime = () => {
    console.log('Time approved');
  };

  const approveAll = () => {
    console.log('All time entries approved');
  };

  const unapproveAll = () => {
    console.log('All time entries unapproved');
  };

  return { approveTime, approveAll, unapproveAll, timeSheet };
};

export default useTimeTracking;
