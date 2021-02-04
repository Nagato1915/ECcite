import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "15px 0"
  },
  label: {
    marginLeft: 0,
    marginRight: "auto"
  },
  value: {
    marginLeft: "auto",
    marginRight: 0,
    fontWeight: 600
  }
})

const TextDetail = (props) => {
  const classes = useStyles();

  return(
    <div className={classes.row}>
      <div className={classes.label}>
        {props.label}
      </div>
      <div className={classes.value}>
        {props.value}
      </div>
    </div>
  )

}

export default TextDetail;