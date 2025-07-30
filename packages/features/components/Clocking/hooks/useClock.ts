import { useState } from 'react';
import ClockService from '../services/ClockService';

export default function useClock() {
  const [clockIn, setClockIn] = useState(true);
  const [onBreak, setOnBreak] = useState(false);
  const [note] = useState('test');

  const timePunch = async () => {
    if (clockIn) {
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
      } else {
        console.error('Clock Out Error:', response.exceptionMessage);
      }
    }
  };

  const BreakSetter = () => {
    setOnBreak(!onBreak);
  };

  return { clockIn, timePunch, BreakSetter, onBreak };
}
