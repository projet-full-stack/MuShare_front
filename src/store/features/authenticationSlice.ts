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
    console.log("ALED")

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
            console.log("aaaaaaaaaaaaaaaaaaa")
        })
        .addCase(authenticate.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log('aled')
            state.token = action.payload.token;
            // localStorage.setItem('token', action.payload.token);
            state.refreshToken = action.payload.refreshToken;
        })
        .addCase(authenticate.rejected, (state) => {
            state.status = 'failed';
            console.log("YYYYYYYYY")
            state.token = null;
            // localStorage.removeItem('token');
            state.refreshToken = null;
      })
    }
});

export default authenticationSlice;