import React from 'react';
import './Topping.css'

class Topping extends React.Component{
    constructor(props) {
        super(props);
    }

    getSelectedTopping(){
        const { selectedToppings } = this.props;
        const selectedTopping = selectedToppings.find(({name: selectedToppingName}) => {
            selectedToppingName === name;
        })
        return selectedTopping;
    }


    getAmount(){
        const selectedTopping = this.getSelectedTopping();
        return selectedTopping ? selectedTopping.amount : 0;       
    }

    getToppingClassName(){
        let className = "topping";
        const { amount } = this.getAmount();
        const active = amount > 0;

        if(!active){
            return className;
        }
        return `${className} topping--active`;
    }

   

    render(){
        const { onAmountAdd, onAmountMinus, name, srcImg } = this.props;
        debugger;
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
                    onClick={() => onAmountMinus(name)}
                >-</button>
                <span>{this.getAmount()}</span>
                <button 
                    type="button"
                    onClick={() => onAmountAdd(name)}
                >+</button>
            </div>
        </div>);
    }
}

export default Topping;



