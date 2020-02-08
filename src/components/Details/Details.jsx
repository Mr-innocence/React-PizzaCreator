import React from 'react';
import Title from '../Title';
import './Details.css'

const Details = () => (
    <section className = "details">
        <Title>Enter your details</Title>
        <div className = "details__container">
            {['name', 'email','confirm email','address','postcode','contact number'].map(v => (
                <div key= {v} className = "detail">
                    <label>{v}</label>
                    <input type="text" name = {v}></input>        
                </div>
            ))}
        </div>
    </section>
)

export default Details;