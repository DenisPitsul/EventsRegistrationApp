import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';
import CONSTANTS from '../../constants';

const PARTICIPANTS_SLICE_NAME = 'participants';

const initialState = {
  participants: [],
  isFetching: false,
  error: null,
  filter: {
    fullName: '',
    email: '',
  },
  status: CONSTANTS.STATUS.IDLE,
  registrationsPerDay: [],
};

export const getEventParticipantsThunk = createAsyncThunk(
  `${PARTICIPANTS_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getEventParticipants(payload.eventId, {
        full_name: payload.filter.fullName,
        email: payload.filter.email,
      });
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const addEventParticipantsThunk = createAsyncThunk(
  `${PARTICIPANTS_SLICE_NAME}/add`,
  async (payload, { rejectWithValue }) => {
    try {
      await API.addEventParticipant(payload.eventId, payload.participant);
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const getEventRegistrationsPetDayThunk = createAsyncThunk(
  `${PARTICIPANTS_SLICE_NAME}/registrationsPerDat`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getEventRegistrationsPerDay(payload);
      console.log('data', data);
      return data;
    } catch (err) {
      console.log('err', err);
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const participantsSlice = createSlice({
  name: PARTICIPANTS_SLICE_NAME,
  initialState,
  reducers: {
    changeStatus: (state, { payload }) => {
      state.status = payload;
    },
    changeFullNameFilter: (state, { payload }) => {
      state.filter.fullName = payload;
    },
    changeEmailFilter: (state, { payload }) => {
      state.filter.email = payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getEventParticipantsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(
      getEventParticipantsThunk.fulfilled,
      (state, { payload }) => {
        state.participants = payload;
        state.isFetching = false;
      }
    );
    builder.addCase(
      getEventParticipantsThunk.rejected,
      (state, { payload }) => {
        state.error = payload;
        state.isFetching = false;
      }
    );

    builder.addCase(addEventParticipantsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(addEventParticipantsThunk.fulfilled, state => {
      state.isFetching = false;
      state.status = CONSTANTS.STATUS.SUCCESS;
    });
    builder.addCase(
      addEventParticipantsThunk.rejected,
      (state, { payload }) => {
        state.error = payload;
        state.isFetching = false;
        state.status = CONSTANTS.STATUS.ERROR;
      }
    );

    builder.addCase(getEventRegistrationsPetDayThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(
      getEventRegistrationsPetDayThunk.fulfilled,
      (state, { payload }) => {
        state.isFetching = false;
        state.registrationsPerDay = payload;
      }
    );
    builder.addCase(
      getEventRegistrationsPetDayThunk.rejected,
      (state, { payload }) => {
        state.error = payload;
        state.isFetching = false;
      }
    );
  },
});

const { reducer, actions } = participantsSlice;

export const {
  changeStatus,
  changeFullNameFilter,
  changeEmailFilter,
  clearError,
} = actions;

export default reducer;
