import React from 'react';
import Title from '../Title';
import "./Sizes.css"
import Size from '../Size';

const Sizes = () => (
    <div className = "sizes">
        <Title>Choose Your Pizzas</Title>
        <div className="sizes__container">
            {[
                {
                    name: 'small',
                    price: 9.99,
                }, {
                    name:'medium',
                    price: 10.99
                }, {
                    name:'large',
                    price:11.99
                }
            ].map(({ name, price }) => (
                <Size name={name} price={price} key={name} />            
            ))}

        </div>
        
    </div>
    
    
);

export default Sizes;