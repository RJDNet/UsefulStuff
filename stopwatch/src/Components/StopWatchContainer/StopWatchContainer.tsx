import React, { useState } from 'react';
import StopWatch from '../StopWatch/StopWatch';
import StatefulStopWatch from '../StopWatch/StatefulStopWatch';

const StopWatchContainer: React.FC = () => {
  const [stopWatchList, setStopWatchList] = useState<React.ReactNode[]>([]);
  const [statefulStopWatchList, setStatefulStopWatchList] = useState<React.ReactNode[]>([]);

  const addStopWatch = (): void => {
    setStopWatchList(() => [...stopWatchList, <StopWatch />]);
  };

  const removeStopWatch = (): void => {
    setStopWatchList([]);
  };

  const addStatefulStopWatch = (): void => {
    setStatefulStopWatchList(() => [...statefulStopWatchList, <StatefulStopWatch />]);
  };

  const removeStatefulStopWatch = (): void => {
    setStatefulStopWatchList([]);
  };

  return (
    <div>
      <h4>StopWatch</h4>
      <button onClick={addStopWatch}>Add StopWatch</button>
      <button onClick={removeStopWatch}>Remove StopWatches</button>
      <div style={{ display: 'block', height: '150px', marginTop: '10px', backgroundColor: 'lightgray' }}>
        {stopWatchList.map((stopWatch, index) => (
          <React.Fragment key={index}>{stopWatch}</React.Fragment>
        ))}
      </div>
      <h4>StatefulStopWatch</h4>
      <button onClick={addStatefulStopWatch}>Add StatefulStopWatch</button>
      <button onClick={removeStatefulStopWatch}>Remove StatefulStopWatches</button>
      <div style={{ display: 'block', height: '150px', marginTop: '10px', backgroundColor: 'lightgray' }}>
        {statefulStopWatchList.map((statefulStopWatch, index) => (
          <React.Fragment key={index}>{statefulStopWatch}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StopWatchContainer;