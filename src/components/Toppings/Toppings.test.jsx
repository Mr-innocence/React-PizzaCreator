import Toppings from './Toppings';
import { render, cleanup } from '@testing-library/react';

test('render all toppings',() => {
    const queries = render(<Toppings />);
    const { getAllByTestId } = queries;

    expect(getAllByTestId().length).toBe(12);
})