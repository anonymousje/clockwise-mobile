import { useState } from 'react';
import ClockService from '../services/ClockService';

export default function useClock() {
  const [clockIn, setClockIn] = useState(true);
  const [onBreak, setOnBreak] = useState(false);

  function timePunch() {
    if (clockIn) {
      ClockService.clockIn();
    } else {
      ClockService.clockOut();
    }

    setClockIn(!clockIn);
  }

  const BreakSetter = () => {
    setOnBreak(!onBreak);
  };

  return { clockIn, timePunch, BreakSetter, onBreak };
}
