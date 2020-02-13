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
            selectedToppings:[]
        } 
        this.addSelectedToppingAmount = this.addSelectedToppingAmount.bind(this);  
        this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this);     
    }

    updateSelectedToppingAmount(name, delta){
        const { selectedToppings } = this.state;
        const amount = selectedToppings.find(({ name: selectedToppingsName}) => { name === selectedToppingsName}) ? selectedToppings.amount : 0;
        const newAmount = amount + delta;
        return newAmount;
    }

    setSelectedToppingAmount(newName, newAmount){
        const { selectedPizzas, selectedToppings } = this.state;
        this.setState({
            selectedPizzas,
            selectedToppings: [
                ...selectedToppings,
                {
                    name: newName,
                    amount: newAmount
                }
            ]
        });       
    }

    addSelectedToppingAmount(name, value = 1){
        const newAmount = this.updateSelectedToppingAmount(name, value);
        this.setSelectedToppingAmount(name, newAmount);              
    }

    minusSelectedToppingAmount(name, value = -1){
        const newAmount = this.updateSelectedToppingAmount(name, value);
        this.setSelectedToppingAmount(name, newAmount);
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