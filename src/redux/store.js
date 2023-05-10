import {configureStore} from "@reduxjs/toolkit";
import {reposSlice} from "./reducers/reposSlice";
import modeReducer from "./reducers/modeSlice";
import weatherReducer from "./reducers/weatherReducer";

export default configureStore({
  reducer: {
    repos: reposSlice.reducer,
    mode: modeReducer,
    weather: weatherReducer,
  },
});
