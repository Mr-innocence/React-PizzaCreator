import React from 'react';
import Title from '../Title';
import "./Summary.css"

class Summary extends React.Component{
    constructor(props){
        super(props);
    }

    getTotal(){
        let total = 0;
        const { selectedSize, selectedToppings } = this.props;
        const { price : pizzaTotalPrice } = selectedSize;
        let toppingTotalPrice = 0;
        selectedToppings.forEach(({ price: toppingPrice, amount: toppingAmount}) => toppingTotalPrice += toppingPrice * toppingAmount );
        total = pizzaTotalPrice + toppingTotalPrice;
        return total.toFixed(2);       
    }

    render(){        
        const { selectedSize, selectedToppings } = this.props;
        const { name: sizeName, price: sizePrice } = selectedSize;
        const total = this.getTotal()
        return(        
            <div className="summary">
                <Title>Summary</Title>
                <ul className="items">
                    <li className="item">
                        <span data-testid="pizzaName" className="item__name">Pizza ({sizeName})</span>
                        <span data-testid="pizzaPrice" className="item__price">${sizePrice}</span>
                    </li>
                    {selectedToppings.map(({ name, price, amount }) => (
                        <li  data-testid="item" className="item" key={name}>
                            <span data-testid="item-name" className="item__name">{name}*{amount}</span>
                            <span data-testid="item-TotalPrice" className="item__price">${price*amount}</span>
                        </li>
                    ))}
                </ul>
                <hr></hr>
                <p className="item">
                    <span>Total :</span>
                    <span data-testid="totalPrice" className="price">${total}</span>
                </p>
            </div>
        );
    }
}

export default Summary;