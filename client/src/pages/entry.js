import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import { useForm } from '../components/useForm';
import { Label, Input, Select, FormBtn } from '../components/form';
import Title from '../components/title';
import { PortalNav } from '../components/navbar';
import UseListeners from '../components/listeners/useListeners';

const Entry = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [values, handleChange] = useForm({
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        position: '',
        permissions: ''
    });

    const handleFormSubmit = ev => {
        ev.preventDefault();
        if (values.email
            && values.firstName
            && values.lastName
            && values.username
            && values.password
            && values.position
            && values.permissions) {
            API.saveUser({
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                username: values.username,
                password: values.password,
                position: values.position,
                permissions: values.permissions
            })
                .then(res => setTimeout(() => setIsSubmitted(true), 2000))
                .catch(err => console.log(err))
        };
    };

    if (isSubmitted === true) {
        return <Redirect to="/roster" />
    }

    return (
        <div>
            <PortalNav />
            <UseListeners />
            <div className="col-md-6 offset-md-3">
            <Title />
            <h2>New Employee Info</h2>
                <form className="text-left" onSubmit={handleFormSubmit}>
                    <Label htmlFor="email">Email Address</Label>
                    <Input name="email" type="email" placeholder="Enter Email" value={values.email} onChange={handleChange} required />
                    <Label htmlFor="first name">First Name</Label>
                    <Input name="firstName" type="text" placeholder="Enter First Name" value={values.firstName} onChange={handleChange} required />
                    <Label htmlFor="last name">Last Name</Label>
                    <Input name="lastName" type="text" placeholder="Enter Last Name" value={values.lastName} onChange={handleChange} required />
                    <Label htmlFor="username">Username</Label>
                    <Input name="username" type="text" placeholder="Enter Username" value={values.username} onChange={handleChange} required />
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" type="password" placeholder="Enter Password" value={values.password} onChange={handleChange} required />
                    <Label htmlFor="position">Position</Label>
                    <Input name="position" type="text" placeholder="Enter Position" value={values.position} onChange={handleChange} required />
                    <Label htmlFor="permissions">Choose Permissions</Label>
                    <Select name="permissions" placeholder="Choose Permissions" value={values.permissions} onChange={handleChange} required />
                    <FormBtn
                        type="submit"
                        disabled={
                            !(
                                values.email
                                && values.firstName
                                && values.lastName
                                && values.username
                                && values.password
                                && values.position
                                && values.permissions
                            )}
                    >Create Employee Profile
                    </FormBtn>
                </form>
            </div>
        </div>
    );
};

export default Entry;