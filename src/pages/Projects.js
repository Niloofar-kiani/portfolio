import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import useStyles from "../assets/styles/styles";
import Profile from "../components/Profile";

const Projects = () => {
  const {classes} = useStyles();
  const [user] = useState("niloofar-kiani");
  const [repos, setRepos] = useState([]);
  const url = `https://api.github.com/users/${user}/repos?page=1&per_page=6&sort=updated`;

  const fetchUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className={classes.home}>
      <div className={classes.profiles}>
        <Grid>
          <Grid
            container
            spacing={{xs: 2, md: 3}}
            columns={{xs: 4, sm: 8, md: 12}}
          >
            {repos.map((repo) => (
              <Profile key={repo.id} {...repo} />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
