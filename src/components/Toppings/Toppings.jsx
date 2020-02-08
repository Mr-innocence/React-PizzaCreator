import React from 'react';
import Title from '../Title';
import './Toppings.css';

const Toppings = () => (
    <div className="toppings">
        <Title>Choose Your Toppings</Title>
        <div className="toppings__container">
            {['anchovy', 'bacon', 'basil', 'chili','mozzarella','mushroom','olive','onion',
            'pepper','pepperoni','sweetcorn','tomato'].map(v =>(
                <div className="topping" key = {v}>
                    <img src={['src/assets/toppings/', v,'.svg'].join('')}></img>
                    <span className="toppingBtn">{v}</span>
                </div>
            ))}
        </div>
    </div>
);

export default Toppings;