import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

import { rootReducer } from '@/redux/reducers';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // @ts-expect-error middleware
  middleware: () => [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
