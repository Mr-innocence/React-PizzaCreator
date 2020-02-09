import React from 'react';
import Title from '../Title';
import Input from "../Input";
import './Details.css'

const Details = () => (
    <section className = "details">
        <Title>Enter your details</Title>
        <div className = "details__container">
            {['name', 'email','confirm email','address','postcode','contact number'].map(name => (
                <Input key={name} name={name}></Input>
            ))}
        </div>
    </section>
)

export default Details;