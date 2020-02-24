import React from 'react';
import Title from '../Title';
import Input from "../Input";
import './Details.css'

class Details extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const{ details, onChange } = this.props;
        return(
            <section className = "details">
                <Title>Enter your details</Title>
                <div className = "details__container">
                    {[
                        {
                            name: 'name',
                            label: 'Name'
                        },
                        {
                            name: 'email',
                            label: 'Email'
                        },
                        {
                            name: 'confirmEmail',
                            label: 'Confirm Email'
                        },
                        {
                            name: 'address',
                            label: 'Address'
                        },
                        {
                            name: 'postcode',
                            label: 'Postcode'
                        },
                        {
                            name: 'contactNumber',
                            label: 'Contact Number'
                        },
                        
                    ].map(({name, label}) => (
                        <Input 
                            key={name} 
                            label={label}
                            name={name}
                            value={details[name]}
                            onChange={onChange}
                        ></Input>
                    ))}
                </div>
            </section>
        );
    }
}

export default Details;