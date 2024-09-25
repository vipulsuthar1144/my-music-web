import { IArtistSlice } from "@/schemas/artist.schema";
import { createSlice } from "@reduxjs/toolkit";

const intialState: IArtistSlice = {
  isLoading: false,
  isError: false,
  artists: [],
};

export const artistSlice = createSlice({
  name: "artist",
  initialState: intialState,
  reducers: {
    setArtists: (state, action) => {
      state.artists += action.payload;
    },
  },
});

export const { setArtists } = artistSlice.actions;

export default artistSlice.reducer;
