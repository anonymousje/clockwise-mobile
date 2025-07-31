import { useCallback, useEffect, useState } from 'react';
import ClockService from '../services/ClockService';
import { ClockStatusResponse } from '../../../types';
import { timeFormatter } from '../../../../utils/helper';

export default function useClock(refreshFlag: { refreshFlag: boolean }) {
  const [clockIn, setClockIn] = useState(true);
  const [onBreak, setOnBreak] = useState(false);
  const [clockTime, setClockTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState('');

  const handleClockOperation = async () => {
    if (!clockIn) {
      const response = await ClockService.clockIn();

      if (response.status) {
        setClockIn(false);
      } else {
        console.error('Clock In Error:', response.exceptionMessage);
      }
    } else {
      const response = await ClockService.clockOut(note);
      if (response.status) {
        setClockIn(true);
        setModalVisible(false);
      } else {
        console.error('Clock Out Error:', response.exceptionMessage);
      }
    }
    getClockStatus();
  };

  const getClockStatus = useCallback(async (): Promise<ClockStatusResponse> => {
    const response = await ClockService.getClockStatus();

    if (response.status) {
      setClockTime(timeFormatter(response.response.hoursWorked || ''));
      setClockIn(response.response.isClockedIn || false);
    }

    return response;
  }, []);

  useEffect(() => {
    getClockStatus();
    const interval = setInterval(() => {
      getClockStatus();
    }, 60000);
    if (refreshFlag.refreshFlag) {
      getClockStatus();
    }
    return () => clearInterval(interval);
  }, [getClockStatus, refreshFlag.refreshFlag]);

  const handleNoteChange = (text: string) => {
    setNote(text);
  };

  const setModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleBreak = () => {
    if (!onBreak) {
      ClockService.startBreak();
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
  };
}
