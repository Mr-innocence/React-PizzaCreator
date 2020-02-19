import React from 'react';
import Title from '../Title';
import Topping from '../Topping';
import './Toppings.css';

class Toppings extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { toppings, selectedToppings, onAmountAdd, onAmountMinus } = this.props;
        return (            
            <div className="toppings">
            <Title>Choose Your Toppings</Title>
            <div className="toppings__container">
                {toppings.map(({ name, srcImg }) =>(            
                    <Topping 
                        key={name} 
                        name={name} 
                        srcImg={srcImg}
                        selectedToppings={selectedToppings}
                        onAmountAdd={onAmountAdd}
                        onAmountMinus={onAmountMinus}
                    ></Topping>  
                                 
                ))}
            </div>
        </div>

        );
    }
}

export default Toppings;