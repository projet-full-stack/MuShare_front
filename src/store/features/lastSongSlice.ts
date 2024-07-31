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
            console.log(action.payload)
            state.lastSongs = [...action.payload].sort((song1: any, song2: any): number => song1.id > song2.id ? -1 : 1) as never[];
        })
        .addCase(fetchSongsLasts.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export default lastSongSlice;