import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PaginationController from '../components/pagination'

const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%"
    },
}));

export default function SecondSection() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.paginationContainer}>
            <PaginationController/>
        </div>
      </div>
    );
  }
