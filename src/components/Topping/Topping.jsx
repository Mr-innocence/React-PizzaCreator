import React from 'react';
import './Topping.css'

class Topping extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
    }

    setAmount(newAmount){
        this.setState({amount:newAmount});
    }

    increaseAmount(value = 1){
        const { amount } = this.state;
        const newAmount = amount + value;
        this.setAmount(newAmount);
    }

    decreaseAmount(value = 1){
        const { amount } = this.state;
        const newAmount = amount - value;
        if(newAmount < 0){
            return;
        }
        this.setAmount(newAmount);
    }

    getToppingClassName(){
        let className = "topping";
        const { amount } = this.state;
        const active = amount > 0;

        if(!active){
            return className;
        }

        return `${className} topping--active`;
    }

    render(){
        const { name, srcImg } = this.props;
        const { amount } = this.state;
        return (
        <div 
            className={this.getToppingClassName()} 
            key = {name}
        >
            <img src = {srcImg}></img>
            <span>{name}</span>
            <div className="topping__amount">
                <button 
                    type="button"
                    onClick={()=>this.decreaseAmount()}
                >-</button>
                <span>{amount}</span>
                <button 
                    type="button"
                    onClick={()=>this.increaseAmount()}
                >+</button>
            </div>
        </div>);
    }
}

export default Topping;



