import React from 'react';
import './Topping.css'

class Topping extends React.Component{
    constructor(props) {
        super(props);
        selectedToppings,
        onAmountAdd,
        onAmountMinus
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



