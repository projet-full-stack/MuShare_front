import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
require('dotenv').config()


let initialState = {
    reader: [],
    status: "idle"
}

export const fetchReader = createAsyncThunk('reader/fetchReader', async () => {

    return fetch('http://localhost:8000/api/readers')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    })
});


const readerSlice = createSlice({
    name: "reader",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReader.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchReader.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.reader = action.payload;
        })
        .addCase(fetchReader.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export default readerSlice;