import React from 'react';
import './Size.css'
import size from '../../assets/size.png'

class Size extends React.Component{
    constructor(props){
        super(props);
    }

    getSizeClassName(name, selectedSize){
        let className = `size size--${name}`;
        const { name: selectedSizeName } = selectedSize;
        const active = selectedSizeName === name;
        if(active){
            className = `size size--${name} size--active`;
        }

        return className;
    }


    render(){
        const { name, price, selectedSize, chooseSize } = this.props;
        return(
            <div 
                data-testid="size"
                className = {this.getSizeClassName(name, selectedSize)}
                key={name} 
                onClick = {() => chooseSize(name, price)}
            >
                <img src = {size} />
                <div className="sizeDescription">
                    <div data-testid="sizeName">
                        {name}
                    </div>
                    <div data-testid="sizePrice">
                        ${price}
                    </div>
                </div>
            </div>

        );
    }
}

export default Size;