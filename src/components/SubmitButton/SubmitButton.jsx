import React from 'react';
import './SubmitButton.css';

class SubmitButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { submitOrder } = this.props;
        return (
            <button 
                className = "submit" 
                type = "submit"
                onClick = {submitOrder}
                >Place Order
            </button>
        );

    }
}

export default SubmitButton;