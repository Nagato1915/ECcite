import React from 'react';

const Textarea = (props) => {
    return(
        <div className="text-input">
            <label className="text-input-label">{ props.label }</label>
            <textarea className="input"
             rows={ props.rows } 
             value={ props.value } 
             onChange={ props.onChange } 
             required={ props.required } />
        </div>
    )
}

export default Textarea;