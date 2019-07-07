import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import './App.css';

import Graph from './utils/Graph';
import FindRouteControls from './components/FindRouteControls';
import AddDataControls from './components/AddDataControls';

let map = new Graph();
map.addNode('A');
map.addNode('B');
map.addNode('C');
map.addNode('D');
map.addNode('E');
map.addNode('F');
map.addNode('G');
map.addNode('H');

map.addEdge('A', 'C', 2);
map.addEdge('C', 'D', 1);
map.addEdge('C', 'F', 4);
map.addEdge('B', 'D', 4);
map.addEdge('B', 'E', 7);
map.addEdge('D', 'F', 1);
map.addEdge('D', 'G', 2);
map.addEdge('F', 'G', 3);
map.addEdge('G', 'H', 4);
map.addEdge('E', 'H', 10);

console.log(map);

const App: FC = () => {
  return (
    <Provider store={store}>
      <AddDataControls />
      <FindRouteControls map={map} />
    </Provider>
  );
}

export default App;