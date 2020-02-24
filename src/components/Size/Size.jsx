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
        const { name, price, selectedSize, onChooseSize } = this.props;
        return(
            <div 
                className = {this.getSizeClassName(name, selectedSize)}
                key={name} 
                onClick = {() => onChooseSize(name, price)}
            >
                <img src = {size} />
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