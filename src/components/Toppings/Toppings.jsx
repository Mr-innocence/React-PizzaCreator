import React from 'react';
import Title from '../Title';
import Topping from '../Topping';
import './Toppings.css';

class Toppings extends React.Component{
    constructor(props){
        super(props);
        this.toppings = [{
            name : 'anchovy',
            srcImg: 'src/assets/toppings/anchovy.svg',
            price: 2,
        },
        {
            name : 'bacon',
            srcImg: 'src/assets/toppings/bacon.svg',
            price: 2,
        },
        {
            name : 'basil',
            srcImg: 'src/assets/toppings/basil.svg',
            price: 2,
        },
        {
            name : 'chili',
            srcImg: 'src/assets/toppings/chili.svg',
            price: 2,
        },
        {
            name : 'mozzarella',
            srcImg: 'src/assets/toppings/mozzarella.svg',
            price: 2,
        },
        {
            name : 'mushroom',
            srcImg: 'src/assets/toppings/mushroom.svg',
            price: 2,
        },
        {
            name : 'olive',
            srcImg: 'src/assets/toppings/olive.svg',
            price: 2,
        },
        {
            name : 'onion',
            srcImg: 'src/assets/toppings/onion.svg',
            price: 2,
        },
        {
            name : 'pepper',
            srcImg: 'src/assets/toppings/pepper.svg',
            price: 2,
        },
        {
            name : 'pepperoni',
            srcImg: 'src/assets/toppings/pepperoni.svg',
            price: 2,
        },
        {
            name : 'sweetcorn',
            srcImg: 'src/assets/toppings/sweetcorn.svg',
            price: 2,
        },
        {
            name : 'tomato',
            srcImg: 'src/assets/toppings/tomato.svg',
            price: 2,
        }];
    }

    render(){
        const { selectedToppings, onAmountAdd, onAmountMinus } = this.props;
        return (            
            <div className="toppings">
            <Title>Choose Your Toppings</Title>
            <div className="toppings__container">
                {this.toppings.map(({ name, srcImg, price }) =>(            
                    <Topping 
                        key={name} 
                        name={name} 
                        srcImg={srcImg}
                        price={price}
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