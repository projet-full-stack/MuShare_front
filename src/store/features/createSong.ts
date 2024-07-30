import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    songs: [],
    status: "idle"
}


const params: RequestInit = {
    method: 'POST',
    headers : {
        ContentType: 'application/json',
    },
}

export const createSong = createAsyncThunk('song/createSong', async (song: any) => {

    let formData = new FormData();
    formData.append('title', song.title);
    formData.append('author', song.author);
    formData.append('file', song.file);
    formData.append('owner', '1');

    console.log(song.file);

    return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT+'/api/songs', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
});

const createSongSlice = createSlice({
    name: "createSong",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createSong.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(createSong.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.songs = action.payload;
        })
        .addCase(createSong.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export default createSongSlice;