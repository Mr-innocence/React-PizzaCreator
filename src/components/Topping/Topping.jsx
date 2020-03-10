import React from 'react';
import './Topping.css'

class Topping extends React.Component{
    constructor(props) {
        super(props);
    }

    getSelectedTopping(name){
        const { selectedToppings }= this.props;
        const selectedTopping = selectedToppings.find(({ name: selectedToppingName }) =>  selectedToppingName === name);
        return selectedTopping;
    }


    getAmount(name){
        const selectedTopping = this.getSelectedTopping(name);
        return selectedTopping ? selectedTopping.amount : 0;       
    }

    getToppingClassName(name){
        let className = "topping";
        const amount= this.getAmount(name);
        const active = amount > 0;

        if(!active){
            return className;
        }
        return `${className} topping--active`;
    }

   

    render(){
        const { onAmountAdd, onAmountMinus, name, price, srcImg } = this.props;
        return (
        <div 
            data-testid="topping"
            className={this.getToppingClassName(name)} 
            key = {name}
        >
            <img src = {srcImg}></img>
            <span data-testid="topping-name">{name}</span>
            <div className="topping__amount">
                <button 
                    type="button"
                    onClick={() => onAmountMinus(name, price)}
                >-</button>
                <span>{this.getAmount(name)}</span>
                <button 
                    type="button"
                    onClick={() => onAmountAdd(name, price)}
                >+</button>
            </div>
        </div>);
    }
}

export default Topping;



