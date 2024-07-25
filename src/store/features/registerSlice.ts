import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "next/headers";
// console.log(process.env.ROOT_ENDPOINT);

const initialState = {
   isCreated: false,
    status: "idle"
}

export const register = createAsyncThunk('auth/register', async (registerForm:any) => {

    const { username, password, email } = registerForm;

    return fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,email, password }),
    }
    )
    .then(response => response.json())
    .then(data => {
        return data
    })
});

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(register.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.isCreated = true
        })
        .addCase(register.rejected, (state) => {
            state.status = 'failed';
            state.isCreated = false
      })
    }
});

export default registerSlice;