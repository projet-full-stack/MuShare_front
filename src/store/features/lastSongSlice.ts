import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
require('dotenv').config()


let initialState = {
    lastSongs: [],
    status: "idle"
}

export const fetchSongsLasts = createAsyncThunk('song/fetchSongs', async () => {

    return fetch('http://localhost:8000/api/songs/last')

    .then(response => response.json())
    .then(data => {
        return data
    })
});


const lastSongSlice = createSlice({
    name: "songLast",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSongsLasts.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchSongsLasts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.lastSongs = action.payload;
        })
        .addCase(fetchSongsLasts.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export default lastSongSlice;