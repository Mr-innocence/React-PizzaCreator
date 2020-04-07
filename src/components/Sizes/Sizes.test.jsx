import React from 'react';
import Sizes from './Sizes';
import { render, cleanup } from '@testing-library/react';   

describe("Sizes", () =>{
    afterEach(cleanup);
    const selectedSize=
    {
        name: "small",
        price: 9.99
    }

    test("render sizes", () =>{
        const { getAllByTestId } = render(
            <Sizes
                    selectedSize={selectedSize}
            ></Sizes>
        );

        expect(getAllByTestId("size").length).toBe(3);
    })
})