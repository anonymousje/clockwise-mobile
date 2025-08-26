import { useEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { breakArrayType, ClockStatusResponse } from '../../types';
import TimeClockDetailsService from '../services/TimeClockDetailsService';
import { NavigationProp } from '../../types';
import {
  formatBreakGaps,
  formatTime,
  formatTimeFromISOString,
  formatDateFromISOString,
} from '../../../utils/helper';
import { useDispatch } from 'react-redux';
import { setRefreshFlag } from '../../../store/actions/flags';
import { SCREENS } from '../../../constants/screens';

const useTimeClockDetails = () => {
  const [clockIn, setClockIn] = useState(true);
  const [clockInTime, setClockInTime] = useState('');
  const [clockInDate, setClockInDate] = useState('');
  const [note, setNote] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [clockTime, setClockTime] = useState('');
  const [breakTime, setBreakTime] = useState<breakArrayType[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

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

  const handleClockOut = async () => {
    const response = await TimeClockDetailsService.handleClockOut(note);
    if (response.status) {
      dispatch(setRefreshFlag(true));
      navigation.replace(SCREENS.MainTabs);
    }
    return response;
  };
  const handleNoteChange = (text: string) => {
    setNote(text);
  };

  const setModal = () => {
    setModalVisible(!modalVisible);
  };
  return {
    clockIn,
    clockInTime,
    clockTime,
    breakTime,
    clockInDate,
    getClockStatus,
    handleClockOut,
    setModal,
    handleNoteChange,
    modalVisible,
  };
};

export default useTimeClockDetails;
