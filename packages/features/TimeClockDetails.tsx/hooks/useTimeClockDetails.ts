import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TimeClockDetailsRouteProp } from '../../types';
import { NavigationProp } from '../../types';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
import { formatTimeDuration } from '../../../utils/helper';

const useTimeClockDetails = () => {
  const [clockIn, setClockIn] = useState(true);
  const [clockInTime, setClockInTime] = useState('');
  const [clockInDate, setClockInDate] = useState('');
  const [clockOutTime, setClockOutTime] = useState('');
  const [clockOutDate, setClockOutDate] = useState('');
  const [breakTime, setBreakTime] = useState('');
  const [clockTime, setClockTime] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<TimeClockDetailsRouteProp>();

  useEffect(() => {
    if (!route.params.entry) {
      navigation.goBack();
      return;
    }
    setClockTime(formatTimeDuration(route.params.entry.total_shift));
    setClockIn(route.params.entry.isClockedIn);

    setClockInTime(
      new Date(route.params.entry.clock_in).toLocaleTimeString([], {
        hour: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
        minute: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
      }),
    );
    setClockInDate(
      new Date(route.params.entry.clock_in).toLocaleDateString(
        COMMON_CONSTANTS.DATE_TIME.EN_US,
        {
          year: COMMON_CONSTANTS.DATE_TIME.NUMERIC,
          month: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
          day: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
        },
      ),
    );
    if (route.params.entry.clock_out) {
      setClockOutTime(
        new Date(route.params.entry.clock_out).toLocaleTimeString([], {
          hour: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
          minute: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
        }),
      );
      setClockOutDate(
        new Date(route.params.entry.clock_out).toLocaleDateString(
          COMMON_CONSTANTS.DATE_TIME.EN_US,
          {
            year: COMMON_CONSTANTS.DATE_TIME.NUMERIC,
            month: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
            day: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
          },
        ),
      );
      setBreakTime(formatTimeDuration(route.params.entry.break_duration));
    } else {
      setClockOutTime('...');
      setClockOutDate('...');
    }
  }, [route.params.entry, navigation]);

  return {
    clockIn,
    clockInTime,
    clockTime,
    clockInDate,
    clockOutTime,
    clockOutDate,
    breakTime,
  };
};

export default useTimeClockDetails;
