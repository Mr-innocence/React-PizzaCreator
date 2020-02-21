import React from 'react';
import Title from '../Title';
import Input from "../Input";
import './Details.css'

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            details: {
                name:'Bella',
                email:'',
                confirmEmail:'',
                address:'',
                postcode:'',
                contactNumber:'',
            }
        }  
        this.setDetail = this.setDetail.bind(this);     
    }

    setDetail(key, value){
        const { details } = this.state;
        const newDetails = {
            ...details,
            [key]: value
        }

        this.setState({
            details: newDetails
        }
        );
            
    }


    render(){
        const{ details } = this.state;
        return(
            <section className = "details">
                <Title>Enter your details</Title>
                <button type="button" onClick = {() => console.log(details)}>show details</button>
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
                            onChange={this.setDetail}
                        ></Input>
                    ))}
                </div>
            </section>
        );
    }
}

export default Details;