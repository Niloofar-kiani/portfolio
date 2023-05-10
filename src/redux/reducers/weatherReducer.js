import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {},
    location: "",
    image: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {setData, setLocation, setImage} = weatherSlice.actions;
export default weatherSlice.reducer;
