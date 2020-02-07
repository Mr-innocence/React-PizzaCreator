import React from 'react';
import "./PizzaCreator.css";
import Title from '../Title';

const PizzaCreator = () => (
    <div className = "pizza-creator">
        <div className="details">
            <Title>Enter your details</Title>
        </div>
        <div className="size">
            <Title>Select your size</Title>
        </div>
        <div className="toppings">
            <Title>Choose your toppings</Title>
        </div>
        <div className="summary">
            <Title>Summary</Title>
        </div>
        <button type="submit">Place order</button>
    </div>
)

export default PizzaCreator;