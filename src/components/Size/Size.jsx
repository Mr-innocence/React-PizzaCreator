import React from 'react';
import './Size.css'

class Size extends React.Component{
    constructor(props){
        super(props);
    }

    getSizeClassName(name, selectedSize){
        let className = `size size--${name}`;
        const active = selectedSize === name;
        if(active){
            className = `size size--${name} size--active`;
        }

        return className;
    }


    render(){
        const { name, price, selectedSize, onChooseSize } = this.props;
        return(
            <div 
                className = {this.getSizeClassName(name, selectedSize)}
                key={name} 
                onClick = {() => onChooseSize(name, price)}
            >
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

        );
    }
}

export default Size;