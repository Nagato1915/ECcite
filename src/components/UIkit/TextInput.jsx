import React from 'react';
import {TextField} from '@material-ui/core/';

const TextInput = (props) => {
  return(
    <div className="text-input">
      <label className="text-input-label">{ props.label }</label>
      <input className="input"
        value = { props.value }
        type = { props.type }
        onChange = {props.onChange } 
        required = { props.required }
        rows = { props.rows }
        />
    </div>
  )
}

export default TextInput;