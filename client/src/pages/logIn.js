import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../components/userContext';
import API from '../utils/API';
import { useForm } from '../components/useForm';
import Title from '../components/title';
import { HomeNav } from '../components/navbar';
import { Label, Input, FormBtn } from '../components/form';

const LogIn = () => {

    const [values, handleChange] = useForm({ email: '', password: '' });

    const { user, setUser } = useContext(UserContext);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleFormSubmit = ev => {
        ev.preventDefault();
        if (values.email && values.password) {
            API.logIn({
                email: values.email,
                password: values.password
            })
                .then(res => loadUser())
        }
    };

    const loadUser = async () => {
        API.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
        return {
            user
        }
    };

    const userSet = async () => {
        const user = await loadUser();
        setUser(user);
        setTimeout(() => setIsLoggedIn(true), 1000);
    };

    if (isLoggedIn === true) {
        return <Redirect to="/portal" />
    }

    return (

        <div>
            <HomeNav />
            <div className="col-md-6 offset-md-3">
                <Title />
                <h2>Log In</h2>
                <form className="text-left" onSubmit={handleFormSubmit}>
                    <Label
                        htmlFor="email">
                        Email Address
                        </Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                    <Label
                        htmlFor="password">
                        Password
                        </Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                    <FormBtn
                        type="submit"
                        onClick={userSet}
                        disabled={
                            !(values.email && values.password)}>
                        Login
                </FormBtn>
                </form>
            </div>
        </div>
    );
};

export default LogIn;