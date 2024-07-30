import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


let initialState = {
    reader: [],
    isVisible: false,
    title: "",
    author: "",
    file: {
        id: 0,
        'realPath': "",
    },
    status: "idle"
}

export const fetchReader = createAsyncThunk('reader/fetchReader', async (token) => {

    return fetch('http://localhost:8000/api/readers', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    })
});


const readerSlice = createSlice({
    name: "reader",
    initialState,
    reducers: {
        setIsVisible: state => {
            state.isVisible = !state.isVisible;
        },
        setTitle: (state, actions) => {
            state.title = actions.payload;
        },
        setAuthor: (state, actions) => {
            state.author = actions.payload;
        },
        setFile: (state, actions) => {
            //state.file = actions.payload
            state.file = actions.payload
        }
    },
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

export const { setIsVisible } = readerSlice.actions;
export const { setTitle } = readerSlice.actions;
export const { setAuthor } = readerSlice.actions;
export const { setFile } = readerSlice.actions;
export default readerSlice;