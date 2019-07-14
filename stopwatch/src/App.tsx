import React, { Component } from 'react';

import { container } from './store';
import * as ReactRedux from 'react-redux';

import StopWatchContainer from './Components/StopWatchContainer/StopWatchContainer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactRedux.Provider store={container}>
          <StopWatchContainer />
        </ReactRedux.Provider>
      </div>
    );
  }
}

export default App;