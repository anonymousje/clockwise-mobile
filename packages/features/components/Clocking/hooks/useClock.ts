import { useState } from 'react';

export default function useClock() {
  const [clockIn, setClockIn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  function timePunch() {
    if (clockIn) {
      console.log('Clocking In');
    } else {
      console.log('Clocking Out');
    }

    setClockIn(!clockIn);
  }

  const BreakSetter = () => {
    setOnBreak(!onBreak);
  };

  return { clockIn, timePunch, BreakSetter, onBreak };
}
