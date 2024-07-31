import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    refreshToken: null,
    login: null,
    status: "idle"
}

export const updateUser = createAsyncThunk('user/updateUser', async (item: any) => {

const {username, email} = item;

    return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT + `/api/users/${item.id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${item.token}`,
        },
        body: JSON.stringify({ username, email }),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
    });

const updateUserSlice = createSlice({
    name: "updateUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        .addCase(updateUser.rejected, (state) => {
            state.status = 'failed';
        })
    }
})

export default updateUserSlice;