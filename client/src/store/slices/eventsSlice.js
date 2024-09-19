import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const EVENTS_SLICE_NAME = 'events';

const initialState = {
  events: [],
  event: {},
  totalPages: 0,
  page: 1,
  isFetching: false,
  error: null,
  sort: 'id',
};

export const getEventsThunk = createAsyncThunk(
  `${EVENTS_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getEvents(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const getEventByIdThunk = createAsyncThunk(
  `${EVENTS_SLICE_NAME}/getById`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getEventById(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const eventsSlice = createSlice({
  name: EVENTS_SLICE_NAME,
  initialState,
  reducers: {
    changeSort: (state, { payload }) => {
      state.sort = payload;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getEventsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getEventsThunk.fulfilled, (state, { payload }) => {
      if (payload.page === 1) {
        state.events = payload.data;
      } else {
        state.events.push(...payload.data);
      }
      state.totalPages = payload.totalPages;
      state.page = payload.page;
      state.isFetching = false;
    });
    builder.addCase(getEventsThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    builder.addCase(getEventByIdThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getEventByIdThunk.fulfilled, (state, { payload }) => {
      state.event = payload;
      state.isFetching = false;
    });
    builder.addCase(getEventByIdThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer, actions } = eventsSlice;

export const { changeSort, changePage } = actions;

export default reducer;
