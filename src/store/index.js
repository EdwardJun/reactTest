import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer.js'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import testSagas from './sagas.js'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  // applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer,enhancer)
sagaMiddleware.run(testSagas)

export default store