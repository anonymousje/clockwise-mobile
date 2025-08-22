import { useEffect } from 'react';
import TimeTrackingService from '../services/TimeTrackingService';
const useTimeTracking = () => {
  useEffect(() => {
    const fetchTimeSheet = async () => {
      const response = await TimeTrackingService.getTimeSheet();
      console.log('TimeSheet Response:', response.data);
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

  return { approveTime, approveAll, unapproveAll };
};

export default useTimeTracking;
