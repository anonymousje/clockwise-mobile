import { useEffect, useCallback, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  breakArrayType,
  ClockStatusResponse,
  TimeClockDetailsRouteProp,
} from '../../types';
import TimeClockDetailsService from '../services/TimeClockDetailsService';
import { NavigationProp } from '../../types';
import {
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
  const [breakTime] = useState<breakArrayType[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const route = useRoute<TimeClockDetailsRouteProp>();

  const getClockStatus = useCallback(async (): Promise<ClockStatusResponse> => {
    const clockInResponse = await TimeClockDetailsService.getClockStatus(
      route.params.entryId,
    );

    if (clockInResponse.status) {
      setClockTime(
        formatTime(
          clockInResponse.response.hoursWorked || '',
          Date.now().toString(),
        ),
      );
      setClockInTime(
        formatTimeFromISOString(clockInResponse.response.clockInTime || ''),
      );
      setClockInDate(
        formatDateFromISOString(clockInResponse.response.clockInTime || ''),
      );
      setClockIn(clockInResponse.response.isClockedIn || false);
    }

    return clockInResponse;
  }, [route.params.entryId]);

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
