import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { name, label, value, onChange } = this.props;
        return(
            <div key= {name} className = "detail">
                <label>{label}</label>
                <input 
                    type="text" 
                    value={value} 
                    name={label}
                    onChange={({target: {value}}) => onChange(name, value)}
                ></input>        
            </div>
        );

    }
}

export default Input;


