import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'dotenv/config'

let  initialState =  {
    playlists: [],
    status: "idle"

}

const params: RequestInit = {
    method: 'GET',
    headers : {
        ContentType: 'application/json'
    },
}

export const fetchPlaylists = createAsyncThunk('playlist/fetchPlaylists', async () => {

    return fetch(process.env.ROOT_ENDPOINT+'/api/playlist')
    .then(response => response.json())
    .then(data => {
        return data
    })
});

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylists.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchPlaylists.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.playlists = action.payload;
        })
        .addCase(fetchPlaylists.rejected, (state, action) => {
            state.status = 'failed';
        })
    }

});

export default playlistSlice;