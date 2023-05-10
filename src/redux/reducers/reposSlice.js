import {createSlice} from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    user: "",
    userExists: true,
    loading: false,
    error: null,
  },
  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload;
      state.userExists = true;
      state.loading = false;
    },
    setUserExists: (state, action) => {
      state.userExists = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setRepos, setUserExists, setLoading, setError, setUser} =
  reposSlice.actions;
