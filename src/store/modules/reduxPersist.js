import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'Conpass-Hotspot',
      storage,
      whitelist: ['createHotspot'],
    },
    reducers
  );

  return persistedReducers;
};
