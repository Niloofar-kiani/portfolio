import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  setRepos,
  setUserExists,
  setLoading,
  setError,
  setUser,
} from "../redux/reducers/reposSlice";
import {Grid, Alert} from "@mui/material";
import useStyles from "../assets/styles/styles";
import Profile from "../components/Profile";
import Loading from "../components/Loading";

const Repositories = () => {
  const {classes} = useStyles();
  const dispatch = useDispatch();
  const {repos, user, userExists, loading, error} = useSelector(
    (state) => state.repos,
  );

  const url = `https://api.github.com/users/${user}/repos?page=1&per_page=6&sort=updated`;

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        dispatch(setLoading(true));
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          dispatch(setRepos(data));
        } else {
          dispatch(setUserExists(false));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
      dispatch(setUser(""));
    }
  };
  return (
    <div className={classes.home}>
      {loading ? (
        <Loading />
      ) : (
        <div className={classes.profiles}>
          <input
            className={classes.searchInput}
            value={user}
            onChange={(e) => dispatch(setUser(e.target.value))}
            onKeyDown={handleSearch}
            placeholder="Enter a username"
            type="text"
            style={{marginBottom: "30px"}}
          />

          <Grid>
            <Grid
              container
              spacing={{xs: 2, md: 3}}
              columns={{xs: 4, sm: 8, md: 12}}
            >
              {!userExists && (
                <Alert variant="outlined" severity="error">
                  There is no such username
                </Alert>
              )}
              {userExists &&
                repos.map((repo) => <Profile key={repo.id} {...repo} />)}
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Repositories;
