import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from './userAPI';

export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const users = await fetchUsers();
        return users;
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsersAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchUsersAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default userSlice.reducer;

