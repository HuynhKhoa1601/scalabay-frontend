import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%"
    },
    headerContainer:{
        padding: "0 8%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    menuTabs:{
        display: "flex",
    },
    tabItem:{
        fontSize: "1.3rem",
        marginLeft: "3rem"
    },
    choosenTabItem:{
        fontSize: "1.3rem",
        marginLeft: "3rem",
        fontWeight:"700",
        borderBottom: "0.2rem solid black"
    }
}));

export default function FirstSection() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.headerContainer}>
            <h1>Product Menu (23)</h1>
            <div className={classes.menuTabs}>
                <div className={classes.tabItem}>Jackets</div>
                <div className={classes.tabItem, classes.choosenTabItem}>T-shirts</div>
                <div className={classes.tabItem}>Trousers</div>
            </div>
        </div>
    </div>
        
    );
  }
