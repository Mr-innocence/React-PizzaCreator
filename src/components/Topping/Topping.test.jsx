import React from 'react';
import Topping from './Topping';
import { render, cleanup } from '@testing-library/react';

afterEach(() => cleanup());

describe('render topping', () => {
    const name = 'pepper';
    const price = 0.99;
    const srcImg = './src/assets/toppings/pepperoni.svg';

    let getByTestId;
    beforeAll(() => {
        ( { getByTestId }= render(<Topping
        name={name} 
        srcImg={srcImg}
        price={price}
        selectedToppings={[]}
        onAmountAdd={() => {}}
        onAmountMinus={() => {}} 
        />));
    })

    test('render name', () => {
        expect(getByTestId('topping-name').textContent).toBe(name);
    });
})



test('amount add',() => {

})

test('amount minus',() => {

})