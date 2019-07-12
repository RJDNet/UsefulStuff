import React, { Component } from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import './App.css';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function
  }
}

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

let reducer = (state = { running: false, time: 0 }, action: { type: string }) => {
  switch (action.type) {
    case 'START': return Object.assign({}, state, { running: true });
    case 'STOP': return Object.assign({}, state, { running: false });
    case 'TICK': return Object.assign({}, state, { time: state.time + (state.running ? 1 : 0) });
    case 'RESET': return Object.assign({}, state, { running: false, time: 0 });
    default: return state;
  }
};

let container = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const mapStateToProps = (state: IStopWatchState) => state;

const mapDispatchToProps = (dispatch: Function, props: IStopWatchProps) => ({
  onStart: () => { dispatch({ type: 'START' }); },
  onStop: () => { dispatch({ type: 'STOP' }); },
  onReset: () => { dispatch({ type: 'RESET' }); }
});

let StopWatch = ReactRedux.connect(mapStateToProps, mapDispatchToProps)((props: IStopWatchProps) => {
  let { time, running, onStop, onStart, onReset } = props;
  console.log(props);

  if (time === undefined || null) return <p>Time doesn't exist here!</p>;

  let minutes = Math.floor(time / 60);
  let seconds = time - (minutes * 60);
  let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div>
      <p>{minutes}:{secondsFormatted}</p>
      <button onClick={running ? onStop : onStart}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

// let StopWatchContainer = ReactRedux.connect()

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactRedux.Provider store={container}>
          <StopWatch />
        </ReactRedux.Provider>
      </div>
    );
  }
}

setInterval(() => {
  container.dispatch({ type: 'TICK' });
}, 1000);

export default App;