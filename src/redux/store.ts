// import { createStore, combineReducers } from 'redux';
// import counter from './reducers/counter';

// const rootReducer = combineReducers({
//     counter
// });

// const store = createStore(rootReducer);

import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counterSlice';

const store = configureStore({
  reducer: {
    counter
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
