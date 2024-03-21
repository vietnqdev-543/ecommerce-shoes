import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import accountReducer from './account/accountSlice';

// Cấu hình Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, accountReducer);

// Tạo store
export const store = configureStore({
  reducer: {
    account: persistedReducer,
  },
});

// Tạo persistor
export const persistor = persistStore(store);
