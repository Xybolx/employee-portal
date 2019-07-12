import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import { Label, Input, Select, FormBtn, useForm } from '../components/form';
import { Col } from '../components/grid';
import EditUserContext from '../components/context/editUserContext';
import Title from '../components/title/title';
import { EditNav } from '../components/navbar';
import UseIdleTimer from '../components/windowEvents/useIdleTimer';

const Edit = () => {

    const { editUser } = useContext(EditUserContext);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [values, handleChange] = useForm({
        phone: editUser.phone,
        email: editUser.email,
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        username: editUser.username,
        password: '',
        position: editUser.position,
        date: editUser.date,
        permissions: editUser.permissions
    });

    const handleFormSubmit = ev => {
        let id = editUser._id
        ev.preventDefault();
        if (values.email
            && values.phone
            && values.firstName
            && values.lastName
            && values.username
            && values.password
            && values.position
            && values.date
            && values.permissions) {
            API.deleteUser(id)
                .then(res => API.saveUser({
                    phone: values.phone,
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    username: values.username,
                    password: values.password,
                    position: values.position,
                    date: values.date,
                    permissions: values.permissions 
            }))
                .then(() => setTimeout(() => {
                    setIsSubmitted(true)
            }, 2000))
                .catch(err => console.log(err))
        };
    };

    if (isSubmitted === true) {
        return <Redirect to="/roster" />
    };

    return (
        <div>
            <EditNav />
            <UseIdleTimer />
            <Col>
            <Title />
            <h3>Edit Employee Info</h3>
            <h6>(Must enter a new password)</h6>
                <form className="text-left" onSubmit={handleFormSubmit}>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input name="phone" type="tel" placeholder="###-###-####" value={values.phone} onChange={handleChange} required />
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
                    <Label htmlFor="date">Hire Date</Label>
                    <Input name="date" type="text" placeholder="MM/DD/YYYY" value={values.date} onChange={handleChange} required />
                    <Label htmlFor="permissions">Choose Permissions</Label>
                    <Select name="permissions" placeholder="Choose Permissions" value={values.permissions} onChange={handleChange} required />
                    <FormBtn
                        type="submit"
                        disabled={
                            !(  values.phone
                                && values.email
                                && values.firstName
                                && values.lastName
                                && values.username
                                && values.password
                                && values.position
                                && values.date
                                && values.permissions
                            )}
                    >
                        <i className="far fa-id-card"></i> Update Employee Profile
                    </FormBtn>
                </form>
            </Col>
        </div>
    );
};

export default Edit;