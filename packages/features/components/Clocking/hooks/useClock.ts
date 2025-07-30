import { useState } from 'react';
import ClockService from '../services/ClockService';

export default function useClock() {
  const [clockIn, setClockIn] = useState(true);
  const [onBreak, setOnBreak] = useState(false);
  const [note, setNote] = useState('');
  function timePunch() {
    if (clockIn) {
      ClockService.clockIn();
    } else {
      setNote('test');
      ClockService.clockOut(note);
    }

    setClockIn(!clockIn);
  }

  const BreakSetter = () => {
    setOnBreak(!onBreak);
  };

  return { clockIn, timePunch, BreakSetter, onBreak };
}
