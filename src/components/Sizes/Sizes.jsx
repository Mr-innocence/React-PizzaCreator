import React from 'react';
import Title from '../Title';
import "./Sizes.css"

const Sizes = () => (
    <div className = "sizes">
        <Title>Choose Your Pizzas</Title>
        <div className="sizes__container">
            {['small', 'medium','large'].map(v => (
            <div className = {[v, "size"].join(' ')}  key={v}>
                <img src = 'src/assets/size.png' />
                <div className="sizeDescription">
                    <div>
                        {v}
                    </div>
                    <div>
                        $9.99
                    </div>
                </div>
            </div>
            ))}

        </div>
        
    </div>
    
    
);

export default Sizes;