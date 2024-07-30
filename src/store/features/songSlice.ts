import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'dotenv/config'
// console.log(process.env.ROOT_ENDPOINT);

let initialState = {
    songs: [],
    status: "idle"
}

export const fetchSongs = createAsyncThunk('song/fetchSongs', async (token) => {
    return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+'/api/songs', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    .then(response => response.json())
    .then(data => {
        return data
    })
});

const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSongs.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchSongs.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.songs = action.payload;
        })
        .addCase(fetchSongs.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export default songSlice;