import React from 'react';
import error from '../../assets/error.png'
import './ErrorMessage.css'

class ErrorMessage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { content } = this.props;
        return(
            <div className="message--error">
                <img src={error}></img>
                <span>{content}</span>
            </div>
        );
    }
}

export default ErrorMessage;