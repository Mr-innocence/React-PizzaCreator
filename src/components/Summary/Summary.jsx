import React from 'react';
import Title from '../Title';
import "./Summary.css"

const Summary = ({
    selectedToppings,
    total
}) => (
    <div className="summary">
        <Title>Summary</Title>
        <ul className="items">
            {/* <li className="item">
                <span className="item__name">Pizza ({name})</span>
                <span className="item__price">${price}</span>
            </li> */}
            {selectedToppings.map(({ name, price, amount }) => (
                <li className="item" key={name}>
                    <span className="item__name">{name} * {amount}</span>
                    <span className="item__price">${price}</span>
                </li>
            ))}
        </ul>
        <hr></hr>
        <p className="total">
            <span>Total :</span>
            <span>${total}</span>
        </p>
    </div>
);

export default Summary;