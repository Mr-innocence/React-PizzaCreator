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
            selectedToppings:[
                {
                    name: 'bacon',
                    amount:1
                },
                {
                    name: 'tomato',
                    amount:2
                }
            ]
        } 
        this.addSelectedToppingAmount = this.addSelectedToppingAmount.bind(this);  
        this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this);     
    }

    getSelectedTopping(name){
        const { selectedToppings } = this.state;
        const selectedTopping = selectedToppings.find(({ name: selectedToppingName}) => name === selectedToppingName);
        return selectedTopping;
    }

    getAmount(selectedTopping){
        const amount = selectedTopping !== undefined ? selectedTopping.amount : 0;
        return amount;
    }

    updateSelectedToppingAmount(name, delta){
        const selectedTopping = this.getSelectedTopping(name);
        const amount = this.getAmount(selectedTopping);
        const newAmount = amount + delta;
        this.getNewSelectedToppings(name, newAmount);
        
    }

    setSelectedToppingAmount(newSelectedToppings){
        this.setState({
            selectedToppings: newSelectedToppings,
        });
    }

    addNewToppingToSelectedToppings(newName, newAmount){
        const { selectedToppings } = this.state;
        const newSelectedToppings=[
            ...selectedToppings,
            {
                name: newName,
                amount: newAmount
            }
        ];
        return newSelectedToppings;
    }

    removeFromSelectedToppings(newName){
        const { selectedToppings } = this.state;
        const newSelectedToppings = selectedToppings.filter((element) => element.name !== newName);
        return newSelectedToppings;
    }

    updateExistToppingAmount(newName, newAmount){
        const { selectedToppings } = this.state;
        const newSelectedToppings = selectedToppings.map((element) => {
            if(element.name === newName){
                return {
                    name: newName,
                    amount: newAmount
                }
            }
             return element;
        });
        return newSelectedToppings;
    }

    getNewSelectedToppings(newName, newAmount){
        const selectedTopping = this.getSelectedTopping(newName);
        const amount = this.getAmount(selectedTopping);
        let newSelectedToppings;
        if(amount === 0 && newAmount > 0){
            newSelectedToppings = this.addNewToppingToSelectedToppings(newName, newAmount);
            
        }else if(amount === 0 && newAmount < 0 || amount === 1 && newAmount === 0){
            newSelectedToppings = this.removeFromSelectedToppings(newName);
        }else
        {
            newSelectedToppings = this.updateExistToppingAmount(newName, newAmount);                      
        }

        this.setSelectedToppingAmount(newSelectedToppings);  
    }


    addSelectedToppingAmount(name, value = 1){
        this.updateSelectedToppingAmount(name, value);           
    }

    minusSelectedToppingAmount(name, value = -1){
        this.updateSelectedToppingAmount(name, value);  
    }


    render(){
        const { selectedToppings } = this.state;
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
                    selectedToppings={selectedToppings} 
                    total="0"
                ></Summary>     
                <SubmitButton></SubmitButton>
            </div>

        );
    }
}

export default PizzaCreator;