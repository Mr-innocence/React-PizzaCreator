import React from 'react';
import Title from '../Title';
import "./Summary.css"

const Summary = () => (
    <div className="summary">
        <Title>Summary</Title>
        <ul className="items">
            {['sweetcorn'].map(v => (
                <li className="item" key={v}>
                    <span className="item__name">{v}</span>
                    <span className="item__price">$9.99</span>
                </li>
            ))}
        </ul>
        <hr></hr>
        <p className="total">
            <span>Total :</span>
            <span>$9.99</span>
        </p>
    </div>
);

export default Summary;