import React, {useState} from "react";
import {Grid, Alert} from "@mui/material";
import useStyles from "../assets/styles/styles";
import Profile from "../components/Profile";
import Loading from "../components/Loading";

const Repositories = () => {
  const {classes} = useStyles();
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState("");
  const [userExists, setUserExists] = useState(true);

  const url = `https://api.github.com/users/${user}/repos?page=1&per_page=6&sort=updated`;

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
          setUserExists(true);
        } else {
          setUserExists(false);
        }
      } catch (error) {
        setUserExists(false);
        console.error("Error fetching repository:", error);
      }
      setUser("");
    }
  };

  return (
    <div className={classes.home}>
      {!repos ? (
        <Loading />
      ) : (
        <div className={classes.profiles}>
          <input
            className={classes.searchInput}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Enter a Repository name"
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
                  There is no such repository name
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
