import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

//logo
import scalapayLogo from "../images/scalapay-logo.svg";

//icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%"
    },
    navBarContainer:{
        padding: "1% 8%",
        background: "#A8B087",
        position: "fix",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listIcons:{
        display:"flex"
    },
    icons:{
        color: "white",
        marginLeft: "1.5rem",
        cursor: "pointer"
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.navBarContainer}>
            <div className={classes.scalapayLogo}>
                <Link to="/"><img src={scalapayLogo} alt="scalapay logo"/></Link>
            </div>
            <div className={classes.listIcons}>
                <div className={classes.icons}><SearchIcon/></div>
                <div className={classes.icons}><NotificationsIcon/></div>
                <Link to="/shopping-cart" className={classes.icons}><ShoppingCartIcon/></Link>
                <Link to="/user" className={classes.icons}><AccountCircleIcon/></Link>
            </div>
            
        </div>
        
      </div>
    );
  }
