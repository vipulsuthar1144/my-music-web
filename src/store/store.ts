import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./slices/artist.slice";
import albumReducer from "./slices/album.slice";
import playlistReducer from "./slices/playlist.slice";
import trackReducer from "./slices/track.slice";
import homeReducer from "./slices/home.slice";
import categoryReducer from "./slices/category.slice";
import userReducer from "./slices/user.slice";
import searchReducer from "./slices/search.slice";
import globelLoaderReducer from "./slices/globleLoader.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    artist: artistReducer,
    album: albumReducer,
    playlist: playlistReducer,
    home: homeReducer,
    track: trackReducer,
    user: userReducer,
    category: categoryReducer,
    search: searchReducer,
    globleLoader: globelLoaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
