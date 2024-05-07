import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {MMKV} from 'react-native-mmkv';

import auth from '../store/auth';

const reducers = combineReducers({auth});

const storage = new MMKV();
// for set get and remove item from local storage
export const localStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['auth'],
};
const rootReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });
    return middleware;
  },
});

const persistor = persistStore(store);
setupListeners(store.dispatch);

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
