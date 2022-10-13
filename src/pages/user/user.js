import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "../../components/navBar";

const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%"
    },
}));

export default function User() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <NavBar/>
        <h1>This is user page</h1>
      </div>
    );
  }
