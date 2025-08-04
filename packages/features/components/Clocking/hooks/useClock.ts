import { useCallback, useEffect, useState } from 'react';
import ClockService from '../services/ClockService';
import { BreakStatusResponse, ClockStatusResponse } from '../../../types';
import { formatTime, formatDuration } from '../../../../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUpdatedWhoIsOnList,
  setRefreshFlag,
} from '../../../../store/actions/flags';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';
import { RootState } from '../../../../store';

export default function useClock() {
  const refreshFlag = useSelector(
    (state: RootState) => state.updated.refreshFlag,
  );
  const dispatch = useDispatch();
  const [clockIn, setClockIn] = useState(true);
  const [onBreak, setOnBreak] = useState(false);
  const [clockTime, setClockTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [breakTime, setBreakTime] = useState('');
  const [note, setNote] = useState('');

  const handleClockOperation = async () => {
    if (!clockIn) {
      const response = await ClockService.clockIn();

      if (response.status) {
        setClockIn(false);
      }
    } else {
      const response = await ClockService.clockOut(note);

      if (response.status) {
        setClockIn(true);
        setModalVisible(false);
      }
    }
    dispatch(fetchUpdatedWhoIsOnList(true));
    getClockStatus();
  };

  const getClockStatus = useCallback(async (): Promise<ClockStatusResponse> => {
    const response = await ClockService.getClockStatus();

    if (response.status) {
      setClockTime(formatTime(response.response.hoursWorked || ''));
      setClockIn(response.response.isClockedIn || false);
    }
    return response;
  }, []);

  const getBreakStatus = useCallback(async (): Promise<BreakStatusResponse> => {
    const response = await ClockService.getBreakStatus();

    if (response.status) {
      const shiftBreaks = response.response?.shiftBreaks ?? [];
      setBreakTime(formatDuration(shiftBreaks));
    }
    return response;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (onBreak) {
        await getBreakStatus();
      } else {
        await getClockStatus();
      }
    };
    fetchData();

    const interval = setInterval(() => {
      getClockStatus();
    }, COMMON_CONSTANTS.TIME_CONSTANTS.MINUTE_IN_MS);

    return () => clearInterval(interval);
  }, [getClockStatus, getBreakStatus, onBreak, dispatch]);

  useEffect(() => {
    if (refreshFlag) {
      if (onBreak) {
        getBreakStatus();
      } else {
        getClockStatus();
      }
      dispatch(setRefreshFlag(false));
    }
  }, [refreshFlag, onBreak, getBreakStatus, getClockStatus, dispatch]);

  const handleNoteChange = (text: string) => {
    setNote(text);
  };

  const setModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleBreak = async () => {
    if (!onBreak) {
      await ClockService.startBreak();
      getBreakStatus();
    } else {
      ClockService.endBreak();
    }
    setOnBreak(!onBreak);
  };

  return {
    clockIn,
    handleClockOperation,
    handleBreak,
    onBreak,
    clockTime,
    handleNoteChange,
    modalVisible,
    setModal,
    breakTime,
  };
}
