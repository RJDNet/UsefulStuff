import * as Redux from 'redux';
import { reducer } from './Redux/reducers';

export let container = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
