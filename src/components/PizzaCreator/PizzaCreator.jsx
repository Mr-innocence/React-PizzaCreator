import React from 'react';
import "./PizzaCreator.css";
import SubmitButton from '../SubmitButton';
import Details from '../Details';
import Sizes from '../Sizes';
import Toppings from "../Toppings";
import Summary from "../Summary";

class PizzaCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedPizzas:[],
            selectedToppings:[
                {
                    name: 'bacon',
                    amount:1,
                },
                {
                    name : 'mushroom',
                    amount:1,
                },
            ]
        }        
    }

    updateSelectedToppingAmount(name, delta){
        const { selectedToppings } = this.state;
        const { amount } = selectedToppings.find(({ name: selectedToppingsName}) => { name === selectedToppingsName});
        const newAmount = amount + delta;
        return newAmount;
    }

    setSelectedToppingAmount(newAmount){
        this.setState({
            selectedPizzas,
            selectedToppings:[
                ...state,
                {
                    name,
                    amount: newAmount
                }
            ]
        }); 
    }

    addSelectedToppingAmount(name, value = 1){
        const newAmount = updateSelectedToppingAmount(name, value);
        setSelectedToppingAmount(newAmount);
              
    }

    minusSelectedToppingAmount(name, value = -1){
        const newAmount = updateSelectedToppingAmount(name, value);
        setSelectedToppingAmount(newAmount);
    }

    

    render(){
        const { selectedPizzas, selectedToppings } = this.state;
        return(
            <div className = "pizza-creator">
                <Details></Details>
                <Sizes></Sizes>
                <Toppings
                    selectedToppings={selectedToppings} 
                    onAmountAdd = {this.addSelectedToppingAmount}
                    onAmountMinus = {this.minusSelectedToppingAmount}
                ></Toppings>
                <Summary 
                    selectedPizza={selectedPizzas} 
                    selectedToppings={selectedToppings} 
                    total="0"
                ></Summary>     
                <SubmitButton></SubmitButton>
            </div>

        );
    }
}

export default PizzaCreator;