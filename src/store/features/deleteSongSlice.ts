import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: "idle"
}

export const deleteSong = createAsyncThunk('song/deleteSong', async (item: any) => {
    return fetch(process.env.NEXT_PUBLIC_ROOT_ENDPOINT + `/api/songs/${item.id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${item.token}`
    },
        body: JSON.stringify({ delete: true})
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
})

const deleteSongSlice = createSlice({
    name: "deleteSong",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteSong.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(deleteSong.fulfilled, (state) => {
            state.status = 'succeeded';
        })
        .addCase(deleteSong.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export default deleteSongSlice;