import React from 'react';
import Title from '../Title';
import "./Summary.css"

class Summary extends React.Component{
    constructor(props){
        super(props);
    }

    render(){        
        const { selectedSize, selectedToppings, getTotal } = this.props;
        const { name: sizeName, price: sizePrice } = selectedSize;
        return(        
            <div className="summary">
                <Title>Summary</Title>
                <ul className="items">
                    <li className="item">
                        <span className="item__name">Pizza ({sizeName})</span>
                        <span className="item__price">${sizePrice}</span>
                    </li>
                    {selectedToppings.map(({ name, price, amount }) => (
                        <li className="item" key={name}>
                            <span className="item__name">{name}*{amount}</span>
                            <span className="item__price">${price*amount}</span>
                        </li>
                    ))}
                </ul>
                <hr></hr>
                <p className="item">
                    <span>Total :</span>
                    <span>${getTotal().toFixed(2)}</span>
                </p>
            </div>
        );
    }
}

export default Summary;