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

// {
//     "isOnBreak": true,
//     "shiftBreaks": [
//         {
//             "timeEntryId": 0,
//             "startTime": "2025-08-05T15:10:12.6250204+05:00",
//             "endTime": "2025-08-05T15:10:45.4871287+05:00",
//             "breakDuration": "00:00:32.8621083"
//         },
//         {
//             "timeEntryId": 0,
//             "startTime": "2025-08-05T15:10:46.5532865+05:00",
//             "endTime": "2025-08-05T15:10:48.7495986+05:00",
//             "breakDuration": "00:00:02.1963121"
//         },
//         {
//             "timeEntryId": 0,
//             "startTime": "2025-08-05T15:10:49.3811677+05:00",
//             "endTime": "2025-08-05T15:10:49.9970149+05:00",
//             "breakDuration": "00:00:00.6158472"
//         },
//         {
//             "timeEntryId": 0,
//             "startTime": "2025-08-05T15:10:50.3252355+05:00",
//             "endTime": null,
//             "breakDuration": "00:00:00"
//         }
//     ]
// }
