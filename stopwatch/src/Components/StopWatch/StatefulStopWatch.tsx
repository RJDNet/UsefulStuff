import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface IStopWatchState {
  running: Boolean
  time: number
}

const StatefulStopWatch: React.FC = () => {
  const stateTimer = useSelector((state: IStopWatchState) => state);

  // Hook for dispatching actions
  // const dispatch = useDispatch();

  // Internal State
  // const [timer, setTimer] = useState({ time: 0, running: false });

  const [timer, setTimer] = useState(stateTimer);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setTimer(prev => ({
        ...prev,
        time: prev.time + (prev.running ? 1 : 0)
      }));

    }, 1000)
    return () => {
      clearInterval(timer1);
    }
  }, []);

  const onStart = () => {
    setTimer(prev => ({
      ...prev,
      running: true
    }));
  }

  const onStop = () => {
    setTimer(prev => ({
      ...prev,
      running: false
    }));
  }

  const onReset = () => {
    setTimer(prev => ({
      ...prev,
      running: false,
      time: 0
    }));
  }

  const minutes = Math.floor(timer.time / 60);
  const seconds = timer.time - (minutes * 60);
  const secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div style={{ display: 'block', float: 'left', margin: '10px', }}>
      <p>StatefulStopWatch</p>
      <p>{minutes}:{secondsFormatted}</p>
      <button onClick={timer.running ? onStop : onStart}>{timer.running ? 'Stop' : 'Start'}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default StatefulStopWatch;