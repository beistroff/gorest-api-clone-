import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAuthData = createAsyncThunk('auth/fetchAuthData', async (params) => {
    const { data } = await axios.post('/auth/login', params);
    return data;
});

export const fetchAuthMount = createAsyncThunk('auth/fetchAuthMount', async () => {
    const { data } = await axios.post('/auth/mount');
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAuthData.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthData.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuthData.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
        [fetchAuthMount.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthMount.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuthMount.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
    }
});

export const isAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;