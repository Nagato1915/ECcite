import React from 'react'
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  formControl: {
    marignBottom: 16,
    minWidth: 30,
    width: "50%",
  }
})

const Check = (props) => {
  const classes = useStyles();

    return(
      /*<div className="text-input">
        <label className="text-input-label">{ props.label }</label>
        <input type={ props.type } value={props.value} control={<Checkbox />} onChange={props.onChange} checked={props.checked}  />
      </div>*/
      <FormControl className={classes.formControl} required={props.required}>
        <FormLabel component='legend'>{props.label}</FormLabel>
        <FormControlLabel value={props.value} control={<Checkbox />} onChange={props.onChange} checked={props.checked} />
      </FormControl>
    )
}

export default Check;