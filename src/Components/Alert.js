import React from 'react'

export default function Alert(props) {

    const capitalize = (words) =>{
        let word = words.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
  return (
    <div style={{height: "65px"}}>
    {props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.Type)}: </strong>{props.alert.msg}
      </div>}
    </div>
  )
}

