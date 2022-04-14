import React from "react";
import { AppBar, UserMenu } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

const CustomUserMenu = (props) => <UserMenu {...props}></UserMenu>;

const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      ></Typography>
      {/* <img
        src={logo}
        style={{
          width: 100,
          padding: 10,
        }}
      /> */}
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
