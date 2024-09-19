import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import participantsReducer from './slices/participantsSlice';

const store = configureStore({
  reducer: {
    eventsData: eventsReducer,
    participantsData: participantsReducer,
  },
});

export default store;
