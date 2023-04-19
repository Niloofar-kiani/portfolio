import * as React from "react";
import {Link} from "react-router-dom";

//Material UI
import {styled, useTheme} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {Box, Drawer, Toolbar, List, ListItem, IconButton, Typography, CssBaseline,  ListItemButton, } from "@mui/material";
import {Twitter, LinkedIn, DarkMode, LightMode, ChevronRight, ChevronLeft, Menu} from "@mui/icons-material";

//assets
import useStyles from "../assets/styles/styles";
import behance from "../assets/images/behance.png";


const drawerWidth = 240;

const Main = styled("main", {shouldForwardProp: (prop) => prop !== "open"})(
  ({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const {classes} = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar className={classes.portAppBar} position="fixed" open={open}>
        <Toolbar className={classes.toolbar}>
          <LightMode className={classes.themeIcons} /> /{" "}
          <DarkMode className={classes.themeIcons} />
          <IconButton
            className={classes.iconBtn}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{...(open && {display: "none"})}}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeft />
            ) : (
              <ChevronRight />
            )}
          </IconButton>
        </DrawerHeader>
        <div className={classes.drawerItems}>
          <List>
            <ListItem key="Home" disablePadding>
              <ListItemButton>
                <Link to="/" className={classes.listItem}>
                  Home
                </Link>
              </ListItemButton>
            </ListItem>
            {["Skills", "Projects", "Contact"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Link to={text} className={classes.listItem}>
                    {text}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box className={classes.drawerHeader}>
            <Typography variant="h6">Connect:</Typography>
            <Typography>info@niloofarkiani.com</Typography>
            <Typography>
              <Link to="tel:+37441757071" className={classes.phoneNum}>
                +374-41757071
              </Link>
            </Typography>

            <IconButton
              href="https://www.behance.net/niloofarkiani"
              color="inherit"
              className={classes.iconBtn}
            >
              <img
                src={behance}
                alt="behance"
                className={classes.behanceIcon}
              />
            </IconButton>
            <IconButton className={classes.iconBtn} href="#" color="inherit">
              <Twitter/>
            </IconButton>
            <IconButton
              className={classes.iconBtn}
              href="https://www.linkedin.com/in/niloofar-kiani/"
              color="inherit"
            >
              <LinkedIn/>
            </IconButton>
          </Box>
        </div>
      </Drawer>
    </Box>
  );
}
