import React from 'react';
import "./PizzaCreator.css";
import SubmitButton from '../SubmitButton';
import Details from '../Details';
import Sizes from '../Sizes';
import Toppings from "../Toppings";
import Summary from "../Summary";

const PizzaCreator = () => (
    <div className = "pizza-creator">
        <Details></Details>
        <Sizes></Sizes>
        <Toppings></Toppings>
        <Summary></Summary>     
        <SubmitButton></SubmitButton>
    </div>
    
)

export default PizzaCreator;