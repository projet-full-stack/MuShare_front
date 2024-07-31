import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
    let initialState = {
    user: {},
    status: "idle"
}

export const fetchUserByLogin = createAsyncThunk('song/fetchUserById', async (item:any) => {
    return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+`/api/users/username/${item.login}`, {
        headers: {
            Authorization: `Bearer ${item.token}`
        }}).then((res) => {
            return res.json();
        }).then(async (data) => {
            return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+`/api/users/${data.id}`, {
                headers: {
                    Authorization: `Bearer ${item.token}`
                }}).then((response) => {
                    return response.json();    
        });
        })  
});

const userSlice = createSlice({
    name: "userById",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserByLogin.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchUserByLogin.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
        .addCase(fetchUserByLogin.rejected, (state, action) => {
            state.status = 'failed';
            state.user = {};
        })
    }
});

export default userSlice;