import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "next/headers";
// console.log(process.env.ROOT_ENDPOINT);

const initialState = {
    token: null,
    refreshToken: null,
    login: null,
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
    .then(data => {
        return [data, username]
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
            // localStorage.setItem('token', action.payload.token);
            state.refreshToken = action.payload[0].refreshToken;
            state.login = action.payload[1];
        })
        .addCase(authenticate.rejected, (state) => {
            state.status = 'failed';
            state.token = null;
            // localStorage.removeItem('token');
            state.refreshToken = null;
            state.login = null;
      })
    }
});

export default authenticationSlice;