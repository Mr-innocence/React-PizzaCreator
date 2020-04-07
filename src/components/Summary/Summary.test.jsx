import React from 'react';
import Summary from './Summary';
import { render, cleanup } from '@testing-library/react';   

describe("Summary", () =>{
    afterEach(cleanup);
    const selectedToppings=[
        {
            name: 'T1',
            price: 1,
            amount: 1
        },{
            name: 'T2',
            price: 2,
            amount: 2
        }
    ];
    const selectedSize=
    {
        name: "small",
        price: 9.99
    }

    test("render items", () =>{
        const { getByTestId, getAllByTestId } = render(
            <Summary 
                    selectedToppings={selectedToppings} 
                    selectedSize={selectedSize}
            ></Summary>);

        expect(getByTestId("pizzaName").textContent).toBe(`Pizza (${selectedSize.name})`); 
        expect(getByTestId("pizzaPrice").textContent).toBe(`$${selectedSize.price}`);

        const items = getAllByTestId("item");  
        const itemNames = getAllByTestId("item-name");
        const itemTotalPrice = getAllByTestId("item-TotalPrice");    
        expect(items.length).toBe(2);
        
        for(let i =0; i < items.length; i++){
            expect(itemNames[i].textContent).toBe(`${selectedToppings[i].name}*${selectedToppings[i].amount}`);
            expect(itemTotalPrice[i].textContent).toBe(`$${selectedToppings[i].price*selectedToppings[i].amount}`);
        }
    });

    test("calculate total price", () =>{       
        const { getByTestId } = render(
        <Summary 
            selectedToppings={selectedToppings} 
            selectedSize={selectedSize}
        ></Summary>
        );

        let totalPrice = jest.fn(() =>{
            let total = 0;
            const { price : pizzaTotalPrice } = selectedSize;
            let toppingTotalPrice = 0;
            selectedToppings.forEach(({ price: toppingPrice, amount: toppingAmount}) => toppingTotalPrice += toppingPrice * toppingAmount );
            total = pizzaTotalPrice + toppingTotalPrice;
            return total;       
        })

        
        expect(getByTestId("totalPrice").textContent).toBe(`$${totalPrice()}`);
    })
})