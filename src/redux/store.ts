import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const bindMiddleware = (middleware: SagaMiddleware<object>[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

let store: any;

export const makeStore = (context: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const localstore = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  localstore.sagaTask = sagaMiddleware.run(rootSaga);
  store = localstore;
  return localstore;
};

export const wrapper = createWrapper(makeStore, { debug: true });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
