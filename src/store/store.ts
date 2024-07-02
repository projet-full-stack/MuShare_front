import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./features/playlistSlice";
import songSlice from "./features/songSlice";

const store = configureStore({
    reducer: {
        playlists: playlistSlice.reducer,
        songs: songSlice.reducer
    },
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;