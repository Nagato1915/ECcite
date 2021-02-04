import React, {useCallback, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSignedIn } from '../../reducks/users/selectors';
import {push} from 'connected-react-router';
import { HeaderMenus, ClosableDrawer } from './index';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "#444",
    height: "9vh"
  },
  toolBar: {
    margin: "0 auto",
    width: "100%",
    height: "100%",
    position: "relaive"
  },
  logo: {
    fontSize: "2.4rem",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "0 auto"
  },
  iconButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "3rem",
    margin: "auto 0"
  }
})

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  const [open, setOpen] = useState();

  const handleDrawerToggle = useCallback((e) => {
    if (e.type == "keydown" && (e.target == "tab" || e.target == "shift")) {
      return;
    }
    setOpen(!open)
  }, [setOpen, open])

  return(
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <h2 className={classes.logo} onClick={() => dispatch(push("/"))}>Nagatanga</h2>
          {isSignedIn && (
            <div className={classes.iconButtons}>
              <HeaderMenus handleDrawerToggle={handleDrawerToggle} />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </div>
  )
}


export default Header;