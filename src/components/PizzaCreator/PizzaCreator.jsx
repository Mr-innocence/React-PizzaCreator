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
            selectedSize:
            {
                name: "small",
                price: 9.99
            },
            selectedToppings:[
                {
                    name: 'bacon',
                    price: 0.99,
                    amount:1
                },
                {
                    name: 'tomato',
                    price: 0.99,
                    amount:2
                }
            ]
        } 
        this.addSelectedToppingAmount = this.addSelectedToppingAmount.bind(this);  
        this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this);
        this.onChooseSize = this.onChooseSize.bind(this);     
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
        const { price } = selectedTopping;
        const newAmount = amount + delta;
        this.getNewSelectedToppings(name, newAmount, price);
        
    }

    setSelectedToppings(newSelectedToppings){
        this.setState({
            selectedToppings: newSelectedToppings,
        });
    }

    addNewToppingToSelectedToppings(newName, newAmount, price){
        const { selectedToppings } = this.state;
        const newSelectedToppings=[
            ...selectedToppings,
            {
                name: newName,
                price: price,
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

    getNewSelectedToppings(newName, newAmount, price){
        const selectedTopping = this.getSelectedTopping(newName);
        const amount = this.getAmount(selectedTopping);
        let newSelectedToppings;
        if(amount === 0 && newAmount > 0){
            newSelectedToppings = this.addNewToppingToSelectedToppings(newName, newAmount, price);
            
        }else if(amount === 0 && newAmount < 0 || amount === 1 && newAmount === 0){
            newSelectedToppings = this.removeFromSelectedToppings(newName);
        }else
        {
            newSelectedToppings = this.updateExistToppingAmount(newName, newAmount);                      
        }

        this.setSelectedToppings(newSelectedToppings);  
    }


    addSelectedToppingAmount(name, value = 1){
        this.updateSelectedToppingAmount(name, value);           
    }

    minusSelectedToppingAmount(name, value = -1){
        this.updateSelectedToppingAmount(name, value);  
    }

    onChooseSize(name, price){
        this.getNewSelectedSize(name, price);
    }

    getNewSelectedSize(name, price){
        const newSelectedSize = {
            name: name,
            price: price

        };
        this.setSelectedSize(newSelectedSize);
    }

    setSelectedSize(newSelectedSize){
        this.setState({
            selectedSize: newSelectedSize
        })
    }


    render(){
        const { selectedSize, selectedToppings } = this.state;
        return(
            <div className = "pizza-creator">
                <Details></Details>
                <Sizes
                    selectedSize={selectedSize}
                    onChooseSize={this.onChooseSize} 
                ></Sizes>
                <Toppings
                    selectedToppings={selectedToppings} 
                    onAmountAdd = {this.addSelectedToppingAmount}
                    onAmountMinus = {this.minusSelectedToppingAmount}
                ></Toppings>
                <Summary 
                    selectedToppings={selectedToppings} 
                    selectedSize={selectedSize}
                    total="0"
                ></Summary>     
                <SubmitButton></SubmitButton>
            </div>

        );
    }
}

export default PizzaCreator;