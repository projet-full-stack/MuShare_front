import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./features/playlistSlice";

const store = configureStore({
    reducer: {
        playlists: playlistSlice.reducer
    },
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;