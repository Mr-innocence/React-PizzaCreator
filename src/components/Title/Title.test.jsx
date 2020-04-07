import React from 'react';
import Title from './Title';
import { render, cleanup } from '@testing-library/react';   

describe("Title", () =>{
    afterEach(cleanup);

    const title = "title";

    test("render title", () => {
        const { getByTestId } = render(
            <Title>{title}</Title>
        );

        expect(getByTestId('title').className).toBe(title);
        expect(getByTestId('title').textContent).toBe(title);
    })
})
