import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "next/headers";
// console.log(process.env.ROOT_ENDPOINT);

const initialState = {
    token: null,
    refreshToken: null,
    idUser: null,
    status: "idle"
}

export const authenticate = createAsyncThunk('auth/fetchToken', async (loginForm:any) => {

    const { username, password } = loginForm;

    return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+'/api/login_check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    }
    )
    .then(response => response.json())
    .then(async (data) => {
       const idUser=  await fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+`/api/users/username/${username}`, {
            headers: {
                Authorization: `Bearer ${data.token}`
            }})
        return [data, (await idUser.json()).id]
    })
});

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authenticate.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(authenticate.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.token = action.payload[0].token;
            state.refreshToken = action.payload[0].refreshToken;
            state.idUser = action.payload[1];
        })
        .addCase(authenticate.rejected, (state) => {
            state.status = 'failed';
            state.token = null;
            state.refreshToken = null;
            state.idUser = null;
      })
    }
});

export default authenticationSlice;