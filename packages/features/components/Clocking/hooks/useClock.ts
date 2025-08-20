import { useCallback, useEffect, useState } from 'react';
import ClockService from '../services/ClockService';
import { BreakStatusResponse } from '../../../types';
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
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [clockIn, setClockIn] = useState(true);
  const [onBreak, setOnBreak] = useState(false);
  const [clockTime, setClockTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [breakTime, setBreakTime] = useState('');
  const [clockId, setClockId] = useState('');
  const [note, setNote] = useState('');

  const handleClockOperation = async () => {
    if (!clockIn) {
      const response = await ClockService.clockOperation(user.userId, 'in');

      if (response.status) {
        setClockIn(false);
      }
    } else {
      const response = await ClockService.clockOperation(user.userId, 'out');

      if (response.status) {
        setClockIn(true);
        setModalVisible(false);
      }
    }
    dispatch(fetchUpdatedWhoIsOnList(true));
    getClockStatus();
  };

  const getClockStatus = useCallback(async () => {
    const response = await ClockService.getClockStatus(user.userId);
    if (response.status) {
      setClockIn(response.response.clockStatus || false);
      setOnBreak(response.response.breakStatus || false);
      if (response.response.clockStatus) {
        setClockTime(
          formatTime(
            response.response.meta.clock_in_at,
            response.response.time,
          ),
        );
        setClockId(response.response.meta.clock_id || '');
      }
      if (response.response.breakStatus) {
        setBreakTime(
          formatTime(
            response.response.meta.break_started_at,
            response.response.time,
          ),
        );
      }
    }

    return response;
  }, [user.userId]);

  const getBreakStatus = useCallback(async (): Promise<BreakStatusResponse> => {
    const response = await ClockService.getBreakStatus();

    if (response.status) {
      const shiftBreaks = response.response?.shiftBreaks ?? [];
      setBreakTime(formatDuration(shiftBreaks));
    }
    return response;
  }, []);

  useEffect(() => {
    if (!user.authenticated) {
      return;
    }

    const fetchData = async () => {
      await getClockStatus();
    };
    fetchData();

    const interval = setInterval(() => {
      getClockStatus();
    }, COMMON_CONSTANTS.TIME_CONSTANTS.MINUTE_IN_MS);

    return () => clearInterval(interval);
  }, [getClockStatus, getBreakStatus, onBreak, dispatch, user.authenticated]);

  useEffect(() => {
    if (refreshFlag && user.authenticated) {
      getClockStatus();
      dispatch(setRefreshFlag(false));
    }
  }, [
    refreshFlag,
    onBreak,
    getBreakStatus,
    getClockStatus,
    dispatch,
    user.authenticated,
  ]);

  const handleNoteChange = (text: string) => {
    setNote(text);
  };

  const setModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleBreak = async () => {
    if (!onBreak) {
      await ClockService.break(user.userId, 'start', clockId);
      getBreakStatus();
    } else {
      ClockService.break(user.userId, 'end', clockId);
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
