import React from 'react';
import "./PizzaCreator.css";
import SubmitButton from '../SubmitButton';
import Details from '../Details';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import ErrorMessage from '../ErrorMessage';

class PizzaCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            atLeastOneTopping: true,
            selectedSize:
            {
                name: "small",
                price: 9.99
            },
            selectedToppings:[],
            details: {
                name:'Bella',
                email:'',
                confirmEmail:'',
                address:'',
                postcode:'',
                contactNumber:'',
            }
        } 
        this.addSelectedToppingAmount = this.addSelectedToppingAmount.bind(this);  
        this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this);
        this.onChooseSize = this.onChooseSize.bind(this);     
        this.getTotal = this.getTotal.bind(this);
        this.setDetails = this.setDetails.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }

    setDetails(key, value){
        const { details } = this.state;
        const newDetails = {
            ...details,
            [key]: value
        }

        this.setState({
            details: newDetails
        }
        );
            
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

    getPrice(name){
        const { toppings } = this.state;
        const { price } = toppings.find(({ name: toppingName}) => toppingName === name);
        return price;
    }

    updateSelectedToppingAmount(name, price, delta){
        const selectedTopping = this.getSelectedTopping(name);
        const amount = this.getAmount(selectedTopping);
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
                const { name, price } = element;
                return {
                    name,
                    price,
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


    addSelectedToppingAmount(name, price, value = 1){
        this.updateSelectedToppingAmount(name, price,value);           
    }

    minusSelectedToppingAmount(name, price, value = -1){
        this.updateSelectedToppingAmount(name, price, value);  
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

    getTotal(){
        let total = 0;
        const { selectedSize, selectedToppings } = this.state;
        const { price : pizzaTotalPrice } = selectedSize;
        let toppingTotalPrice = 0;
        selectedToppings.forEach(({ price: toppingPrice, amount: toppingAmount}) => toppingTotalPrice += toppingPrice * toppingAmount );
        total = pizzaTotalPrice + toppingTotalPrice;
        return total;       
    }


    setAtLeastOneTopping(newAtLeastOneTopping){
        this.setState({
            atLeastOneTopping:newAtLeastOneTopping,
        })
    }

    submitOrder(){
        const { selectedSize, selectedToppings, details, atLeastOneTopping } = this.state;
        if(selectedToppings.length>0){
            this.setAtLeastOneTopping(true);
            console.log(selectedSize);
            console.table(selectedToppings);
            console.log(details);  
                             
        }else{
            
            this.setAtLeastOneTopping(false);
            setTimeout(() => {
                this.setAtLeastOneTopping(true);
            },3000);  
        }   
        
    }


    render(){
        const { toppings, selectedSize, selectedToppings, details, atLeastOneTopping } = this.state;
        return(
            <div className = "pizza-creator">
                {!atLeastOneTopping && <ErrorMessage
                    content="Please select at least one topping"
                ></ErrorMessage>}
                
                <Details
                    details={details}
                    onChange={this.setDetails}
                ></Details>
                <Sizes
                    selectedSize={selectedSize}
                    onChooseSize={this.onChooseSize} 
                ></Sizes>
                <Toppings
                    toppings={toppings}
                    selectedToppings={selectedToppings} 
                    onAmountAdd = {this.addSelectedToppingAmount}
                    onAmountMinus = {this.minusSelectedToppingAmount}
                ></Toppings>
                <Summary 
                    selectedToppings={selectedToppings} 
                    selectedSize={selectedSize}
                    getTotal={this.getTotal}
                ></Summary>     
                <SubmitButton
                    submitOrder={this.submitOrder}
                ></SubmitButton>
            </div>

        );
    }
}

export default PizzaCreator;