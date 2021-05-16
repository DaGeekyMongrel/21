import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const composedMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : applyMiddleware(...middleware);

const store = createStore(rootReducer, composedMiddleware);

export default store;
