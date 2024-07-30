import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


let initialState = {
    lastSongs: [],
    status: "idle"
}

const params: RequestInit = {
    method: 'GET',
    headers : {
        ContentType: 'application/json',
        AccessControlAllowOrigin: '*'
    },
}

export const fetchSongsLasts = createAsyncThunk('song/fetchSongs', async (token) => {
    console.log(process.env.NEXT_PUBLIC_ROOT_ENDPOINT)
    return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+'/api/songs/last', {
        headers: {
            Authorization: `Bearer ${token}`
    }})
    .then(response => response.json())
    .then(data => {
        console.log(data);
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