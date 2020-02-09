import React from 'react';
import './Topping.css'

const Topping = ({ name, srcImg }) => (
    <div className="topping" key = {name}>
        <img src = {srcImg}></img>
        <span>{name}</span>
        <div className="topping__amount">
            <button type="button">-</button>
            <span>0</span>
            <button type="button">+</button>
        </div>
    </div>
)

export default Topping;



