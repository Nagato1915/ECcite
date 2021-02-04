import React from 'react';
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles({
  formControl: {
    marignBottom: 16,
    minWidth: 128,
    width: "100%"
  }
})

const SelectBox = (props) => {
  const classes = useStyles();

  return(
    <div className="text-input">
        <label className="text-input-label">{ props.label }</label>
        <select className="input" name={ props.name } >
            { props.options.map(option => {
              return <option key={ option.id } value={option.id}>{ option.name }</option>
            }) }
        </select>
    </div>
   
  )
}

export default SelectBox;