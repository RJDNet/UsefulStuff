import React, { useState, FC, ChangeEvent } from 'react';
import Graph from '../utils/Graph';

interface IFindRouteControlsProps {
  map: Graph
}

const FindRouteControls: FC<IFindRouteControlsProps> = ({ map }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [route, setRoute] = useState();
  const [distance, setDistance] = useState(0);

  const startInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setStart(e.target.value.toUpperCase());
  }

  const endInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEnd(e.target.value.toUpperCase());
  }

  const handleSubmit = (): void => {
    if (map.nodes.includes(start && end)) {
      const { path, times } = map.findPath(start, end)
      setRoute(path);
      setDistance(times);
    }
  }

  return (
    <div className='distance'>
      <input
        className='startRouteInput'
        placeholder='Route Start'
        onChange={startInputChange}
        value={start}
      />
      <input
        className='endRouteInput'
        placeholder='Route End'
        onChange={endInputChange}
        value={end}
      />
      <h4 className='from' data-testid='from'>From: {start}</h4>
      <h4 className='end' data-testid='end'>To: {end}</h4>
      <h4 className='shortestRoute' data-testid='shortestRoute'>Shortest Route: {route} with a distance of {distance}</h4>
      <button className='routeButton' onClick={handleSubmit}>Find Shortest Route</button>
    </div>
  );
}

export default FindRouteControls;