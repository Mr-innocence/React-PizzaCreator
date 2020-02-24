import React from 'react';
import './Input.css';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contentBlank: false,
        }
    }

    setContentBlank(newContentBlank){
        this.setState({
            contentBlank: newContentBlank,
        })
    }

    render(){
        const { name, label, value, onChange } = this.props;
        const { contentBlank } = this.state;
        const showError = contentBlank && !value;
        return(
            <div key= {name} className = {showError ? "detail--error" : "detail"}>
                <label>{label}</label>
                {showError && (<span>{`Please input ${label}`}</span>)}
                <input 
                    type="text" 
                    value={value} 
                    name={label}
                    onFocus={() =>this.setContentBlank(true)}
                    onChange={({target: {value}}) => onChange(name, value)}
                ></input>        
            </div>
        );

    }
}

export default Input;


