import React from 'react';
import './Title.css';

const Title = ({children}) => (
    <h2 data-testid="title" className = "title">{children}</h2>

)

export default Title;