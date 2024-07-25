import { fetchSongsLasts } from '@/store/features/lastSongSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
let initialState = {
    lastSongs: [],
    status: "idle"
}

export const fetchSongById = createAsyncThunk('song/fetchSongById', async (id: string) => {
    const response = await fetch(`http://localhost:8000/api/songs/${id}`, {
    });
    const data = await response.json();
    const headers = await response.headers;
    console.log(headers)
    return data;    
});

const songByIdSlice = createSlice({
    name: "songById",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSongById.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchSongById.fulfilled, (state, {payload}) => {
            state.status = 'succeeded';
            console.log(payload)
            //state.lastSongs = payload;
        })
        .addCase(fetchSongById.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export default songByIdSlice;