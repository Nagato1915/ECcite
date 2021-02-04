import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  "button": {
    backgroundColor: "rgb(50, 50, 50)",
    color: "#fff",
    fontSize: "16",
    height: "48",
    marginButton: "16",
    width: "256"
  }
})

const PrimaryButton = (props) => {
  const classes = useStyles();
  return(
    <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  )
}

export default PrimaryButton;