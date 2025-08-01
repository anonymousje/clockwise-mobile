import { useCallback, useEffect, useState } from 'react';
import ClockService from '../services/ClockService';
import { BreakStatusResponse, ClockStatusResponse } from '../../../types';
import { formatTime, formatDuration } from '../../../../utils/helper';

export default function useClock(refreshFlag: { refreshFlag: boolean }) {
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
    if (onBreak) {
      getBreakStatus();
    } else {
      getClockStatus();
    }

    const interval = setInterval(() => {
      getClockStatus();
    }, 60000);

    if (refreshFlag.refreshFlag) {
      if (onBreak) {
        getBreakStatus();
      } else {
        getClockStatus();
      }
    }
    return () => clearInterval(interval);
  }, [getClockStatus, refreshFlag.refreshFlag, getBreakStatus, onBreak]);

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
