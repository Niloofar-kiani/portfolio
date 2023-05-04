import React from "react";
import useStyles from "../assets/styles/styles";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardHeader,
  Avatar,
  CardContent,
} from "@mui/material";
import {red} from "@mui/material/colors";
import {format} from "date-fns";

const Profile = (props) => {
  const {classes} = useStyles();

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{maxWidth: 345}}>
        <CardHeader
          avatar={
            <Avatar
              alt={props.owner.login}
              src={props.owner.avatar_url}
              sx={{bgcolor: red[500]}}
              aria-label="profile picture"
            >
              {props.owner.login[0]}
            </Avatar>
          }
          title={props.owner.login}
          subheader={`${props.name} was created on ${format(
            new Date(props.created_at),
            "dd MMMM yyyy",
          )}`}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            backgroundColor="primary.dark"
            borderRadius={2}
            padding={0.5}
            marginBottom={1}
          >
            {props.language}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Repository's last update was on{" "}
            {format(new Date(props.updated_at), "dd MMMM yyyy")}
          </Typography>
        </CardContent>
        <CardActions>
          <a
            href={props.html_url}
            target="_blank"
            rel="noreferrer"
            style={{textDecoration: "none", color: "primary.dark"}}
          >
            View Repo
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Profile;
