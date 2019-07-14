import React, { useState, useEffect } from 'react';
import * as ReactRedux from 'react-redux';

interface IStopWatchProps {
  time: number
  running: Boolean
}

interface IStopWatchState {
  running: Boolean
  time: number
}

const mapStateToProps = (state: IStopWatchState) => ({ ...state });

const StopWatch = ReactRedux.connect(mapStateToProps)((props: IStopWatchProps) => {
  const { time, running } = props;
  const [timer, setTimer] = useState({ time, running });

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
    <div style={{ display: 'block', float: 'left', margin: '10px' }}>
      <p>StopWatch</p>
      <p>{minutes}:{secondsFormatted}</p>
      <button onClick={timer.running ? onStop : onStart}>{timer.running ? 'Stop' : 'Start'}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

export default StopWatch;