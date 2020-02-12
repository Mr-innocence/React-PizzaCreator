import React from 'react';
import Title from '../Title';
import Topping from '../Topping';
import './Toppings.css';

class Toppings extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { selectedToppings } = this.props;
        return (            
            <div className="toppings">
            <Title>Choose Your Toppings</Title>
            <div className="toppings__container">
                {[{
                name : 'anchovy',
                srcImg: 'src/assets/toppings/anchovy.svg',
                price: 0.99,
            },
            {
                name : 'bacon',
                srcImg: 'src/assets/toppings/bacon.svg',
                price: 0.99,
            },
            {
                name : 'basil',
                srcImg: 'src/assets/toppings/basil.svg',
                price: 0.99,
            },
            {
                name : 'chili',
                srcImg: 'src/assets/toppings/chili.svg',
                price: 0.99,
            },
            {
                name : 'mozzarella',
                srcImg: 'src/assets/toppings/mozzarella.svg',
                price: 0.99,
            },
            {
                name : 'mushroom',
                srcImg: 'src/assets/toppings/mushroom.svg',
                price: 0.99,
            },
            {
                name : 'olive',
                srcImg: 'src/assets/toppings/olive.svg',
                price: 0.99,
            },
            {
                name : 'onion',
                srcImg: 'src/assets/toppings/onion.svg',
                price: 0.99,
            },
            {
                name : 'pepper',
                srcImg: 'src/assets/toppings/pepper.svg',
                price: 0.99,
            },
            {
                name : 'pepperoni',
                srcImg: 'src/assets/toppings/pepperoni.svg',
                price: 0.99,
            },
            {
                name : 'sweetcorn',
                srcImg: 'src/assets/toppings/sweetcorn.svg',
                price: 0.99,
            },
            {
                name : 'tomato',
                srcImg: 'src/assets/toppings/tomato.svg',
                price: 0.99,
            }].map(({ name, srcImg, onAmountAdd, onAmountMinus }) =>(            
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