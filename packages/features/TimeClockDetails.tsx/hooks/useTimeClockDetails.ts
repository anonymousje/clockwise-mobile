import { useEffect, useCallback, useState } from 'react';
import { breakArrayType, ClockStatusResponse } from '../../types';
import TimeClockDetailsService from '../services/TimeClockDetailsService';
import {
  formatBreakGaps,
  formatTime,
  formatTimeFromISOString,
  formatDateFromISOString,
} from '../../../utils/helper';

const useTimeClockDetails = () => {
  const [clockIn, setClockIn] = useState(true);
  const [clockInTime, setClockInTime] = useState('');
  const [clockInDate, setClockInDate] = useState('');
  const [clockTime, setClockTime] = useState('');
  const [breakTime, setBreakTime] = useState<breakArrayType[]>([]);

  const getClockStatus = useCallback(async (): Promise<ClockStatusResponse> => {
    const clockInResponse = await TimeClockDetailsService.getClockStatus();
    const breakResponse = await TimeClockDetailsService.getBreakStatus();

    if (clockInResponse.status) {
      setClockTime(formatTime(clockInResponse.response.hoursWorked || ''));
      setClockInTime(
        formatTimeFromISOString(clockInResponse.response.clockInTime || ''),
      );
      setClockInDate(
        formatDateFromISOString(clockInResponse.response.clockInTime || ''),
      );

      setClockIn(clockInResponse.response.isClockedIn || false);
    }

    if (breakResponse.status) {
      const shiftBreaks = breakResponse.response?.shiftBreaks ?? [];
      setBreakTime(formatBreakGaps(shiftBreaks));
    }

    return clockInResponse;
  }, []);

  useEffect(() => {
    getClockStatus();
  }, [getClockStatus]);

  return {
    clockIn,
    clockInTime,
    clockTime,
    breakTime,
    clockInDate,
    getClockStatus,
  };
};

export default useTimeClockDetails;
