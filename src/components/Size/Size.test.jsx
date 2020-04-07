import React from 'react';
import Size from './Size';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';   

describe("Size", () =>{
    afterEach(cleanup);
    const myName = "s1";
    const myPrice = 2;
    const selectedSize=
    {
        name: "small",
        price: 9.99
    }

    test("render unchoosen size",() =>{
        const { getByTestId } = render(
            <Size                         
                name={myName} 
                price={myPrice} 
                selectedSize={selectedSize}
            /> 
        );

        expect(getByTestId("size").className).toBe(`size size--${myName}`);
        expect(getByTestId("sizeName").textContent).toBe(myName);
        expect(getByTestId("sizePrice").textContent).toBe(`$${myPrice}`);

    })

    test("render choosen size", () => {
        const { getByTestId } = render(
            <Size                         
                name={selectedSize.name} 
                price={selectedSize.price} 
                selectedSize={selectedSize}
            /> 
        );

        const mySize = getByTestId("size");
        expect(mySize.className).toBe(`size size--${selectedSize.name} size--active`);
    })

    test("choose size", () => {
        const chooseSizeSpy = sinon.spy();
        const { getByTestId } = render(
            <Size                        
                name={myName} 
                price={myPrice} 
                chooseSize={chooseSizeSpy} 
                selectedSize={selectedSize}
            /> 
        );

        const chooseSizeBtn = getByTestId("size");
        fireEvent.click(chooseSizeBtn);
        sinon.assert.calledOnce(chooseSizeSpy);
        sinon.assert.calledWith(chooseSizeSpy, myName, myPrice);
    });
})