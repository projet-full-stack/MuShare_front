import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./features/playlistSlice";
import songSlice from "./features/songSlice";
import lastSongSlice from "./features/lastSongSlice";
import readerSlice from "./features/readerSlice";
import createSongSlice from "./features/createSong";
import authenticationSlice from "./features/authenticationSlice";
import registerSlice from "./features/registerSlice";
import songByIdSlice from "./features/songByIdSlice";
import userSlice from "./features/userSlice";
import updateUserSlice from "./features/updateUserSlice";

const store = configureStore({
    reducer: {
        playlists: playlistSlice.reducer,
        songs: songSlice.reducer,
        lastSongs: lastSongSlice.reducer,
        song: songByIdSlice.reducer,
        createSong: createSongSlice.reducer,
        reader: readerSlice.reducer,
        authentication: authenticationSlice.reducer,
        register: registerSlice.reducer,
        user: userSlice.reducer,
        updateUser: updateUserSlice.reducer
    },
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;