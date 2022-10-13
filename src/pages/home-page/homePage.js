import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "../../components/navBar";
import FirstSection from "./sections/firstSection";
import SecondSection from "./sections/secondSection";

const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%"
    },
}));

export default function HomePage() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <NavBar/>
        <FirstSection/>
        <SecondSection/>
      </div>
    );
  }
