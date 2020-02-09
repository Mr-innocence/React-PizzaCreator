import React from 'react';
import './Size.css'

const Size = ({name, price}) => (
    <div className = {`size size--${name}`}  key={name}>
        <img src = 'src/assets/size.png' />
        <div className="sizeDescription">
            <div>
                {name}
            </div>
            <div>
                ${price}
            </div>
        </div>
    </div>

)

export default Size;