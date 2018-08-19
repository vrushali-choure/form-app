import React from 'react';

const Input=function(props){
    return(
    <div>
    <input 
    name={props.name}
    type={props.type}
    value={props.value}
    onChange={props.inputHandel}/>
    </div>);
}


export default Input;