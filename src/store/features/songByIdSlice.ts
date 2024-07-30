import { fetchSongsLasts } from '@/store/features/lastSongSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
let initialState = {
    song: {},
    status: "idle"
}

export const fetchSongById = createAsyncThunk('song/fetchSongById', async (item:any) => {
    const response = await fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+`/api/songs/${item.id}`, {
        headers: {
            Authorization: `Bearer ${item.token}`
        }});
        const data = await response.json();
        console.log(data);
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
        .addCase(fetchSongById.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.song = action.payload;
        })
        .addCase(fetchSongById.rejected, (state, action) => {
            state.status = 'failed';
            state.song = {};
        })
    }
});

export default songByIdSlice;