import React from 'react';
import Topping from './Topping';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';    

describe('Topping', () => {
    afterEach(cleanup);
    const name = 'pepper';
    const price = 0.99;
    const srcImg = '/src/assets/toppings/pepperoni.svg';

    test("render topping", () =>{        
        const { getByTestId } = render((
            <Topping
                name={name} 
                srcImg={srcImg}
                price={price}
                selectedToppings={[]}
                onAmountAdd={() => {}}
                onAmountMinus={() => {}} 
            />));
        expect(getByTestId('topping-name').textContent).toBe(name);
        expect(getByTestId('topping-srcImg').alt).toBe(name);
        expect(getByTestId('topping-srcImg').src).toBe('http://localhost/src/assets/toppings/pepperoni.svg');
    })

    
    test("topping amount add and minus", () => {
        const onAmountAddSpy = sinon.spy();
        const onAmountMinusSpy = sinon.spy();
        const { getByTestId } = render((
            <Topping
                name={name} 
                srcImg={srcImg}
                price={price}
                selectedToppings={[]}
                onAmountAdd={onAmountAddSpy}
                onAmountMinus={onAmountMinusSpy} 
            />));
        const toppingAmountAddBtn = getByTestId('topping-AmountAdd');
        fireEvent.click(toppingAmountAddBtn);           
        sinon.assert.calledOnce(onAmountAddSpy);
        sinon.assert.calledWith(onAmountAddSpy,name,price)  
        
        const toppingAmountMinusBtn = getByTestId('topping-AmountMinus');
        fireEvent.click(toppingAmountMinusBtn);
        sinon.assert.calledOnce(onAmountMinusSpy);
        sinon.assert.calledWith(onAmountMinusSpy,name,price);
    }) 

    test("topping className", () =>{
        const amount = 1;
        const { getByTestId } = render((
            <Topping
                name={name} 
                srcImg={srcImg}
                price={price}
                selectedToppings={[{name, price,amount}]}
                onAmountAdd={() => {}}
                onAmountMinus={() => {}} 
            />));

        const topping = getByTestId('topping');
        expect(topping.className).toBe("topping topping--active");
    })

    test("topping className", () =>{
        const amount = 1;
        const { getByTestId } = render((
            <Topping
                name={name} 
                srcImg={srcImg}
                price={price}
                selectedToppings={[{name, price,amount}]}
                onAmountAdd={() => {}}
                onAmountMinus={() => {}} 
            />));

        const toppingAmount = getByTestId('topping-amount');
        expect(toppingAmount.textContent).toBe(amount.toString());
    })
});
