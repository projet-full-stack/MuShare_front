import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "next/headers";
// console.log(process.env.ROOT_ENDPOINT);

const initialState = {
    token: null,
    refreshToken: null,
    status: "idle"
}

export const authenticate = createAsyncThunk('auth/fetchToken', async (loginForm:any) => {

    const { username, password } = loginForm;

    return fetch('http://localhost:8000/api/login_check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    }
    )
    .then(response => response.json())
    .then(data => {
        return data
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
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
        })
        .addCase(authenticate.rejected, (state) => {
            state.status = 'failed';
            state.token = null;
            state.refreshToken = null;
      })
    }
});

export default authenticationSlice;