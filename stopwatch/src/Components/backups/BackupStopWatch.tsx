import React from 'react';
import * as ReactRedux from 'react-redux';
import { container } from '../../store';

interface IStopWatchProps {
  time?: number
  running?: Boolean
  onStop?: () => void
  onStart?: () => void
  onReset?: () => void
}

interface IStopWatchState {
  running: Boolean
  time: number
}

const mapStateToProps = (state: IStopWatchState) => state;

const mapDispatchToProps = (dispatch: Function, props: IStopWatchProps) => ({
  onStart: () => { dispatch({ type: 'START' }); },
  onStop: () => { dispatch({ type: 'STOP' }); },
  onReset: () => { dispatch({ type: 'RESET' }); }
});

setInterval(() => {
  container.dispatch({ type: 'TICK' });
}, 1000);

const StopWatch = ReactRedux.connect(mapStateToProps, mapDispatchToProps)((props: IStopWatchProps) => {
  const { time, running, onStop, onStart, onReset } = props;

  if (time === undefined || null) return <p>Time doesn't exist here!</p>;

  const minutes = Math.floor(time / 60);
  const seconds = time - (minutes * 60);
  const secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div style={{ display: 'block', float: 'left', margin: '10px' }}>
      <p>StopWatch</p>
      <p>{minutes}:{secondsFormatted}</p>
      <button onClick={running ? onStop : onStart}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

export default StopWatch;