import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux-saga/reducers/rootReducer';
import { watcherNumberSaga } from './redux-saga/sagas/numberSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watcherNumberSaga);

// import { applyMiddleware, compose, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './redux-saga/reducers/rootReducer';
// import { numberSaga } from './redux-saga/sagas/numberSaga';
// import { any } from 'prop-types';

// const sagaMiddleware = createSagaMiddleware();

// export function configureStore(initialState: any) {
//   // const middleware = [sagaMiddleware];

//   // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   // const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

//   const sagaMiddleware = createSagaMiddleware();

//   const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware),
//   );

//   sagaMiddleware.run(numberSaga);

//   return store;
// }