import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./features/playlistSlice";
import songSlice from "./features/songSlice";
import lastSongSlice from "./features/lastSongSlice";
import readerSlice from "./features/readerSlice";

const store = configureStore({
    reducer: {
        playlists: playlistSlice.reducer,
        songs: songSlice.reducer,
        lastSongs: lastSongSlice.reducer,
        reader: readerSlice.reducer
    },
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;