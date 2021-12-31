import React from 'react';
import {useDispatch} from "react-dom"
export default function Input(props) {
   
  return (
      
    <>
     <div className="form-floating mb-3">
       <input 
        type={props.type}
        className={props ? "form-control":"form-control is-invalid"} 
        id={props.id}
        label={props.label} 
        required={props.required}
        defaultValue={props.defaultValue}
        onBlur={(e)=>onBlurHandler(e)}
        disabled={props.disabled}
        onChange={(e)=>dispatch(SET_INPUT({fieldName:props.id,fieldValue:e.target.value}))}
        />
        <label htmlFor={props.id}>{props.label}</label> </div>
    </>
  )
}
