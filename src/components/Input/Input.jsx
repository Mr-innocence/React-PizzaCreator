import React from 'react';

const Input = ({name}) => (
    <div key= {name} className = "detail">
        <label>{name}</label>
        <input type="text" name = {name}></input>        
    </div>
)

export default Input;


