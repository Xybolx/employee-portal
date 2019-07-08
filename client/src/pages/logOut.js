import React, { useContext, useEffect } from 'react';
import UserContext from '../components/userContext';
import Title from '../components/title';
import { HomeNav } from '../components/navbar';
import API from '../utils/API';

const LogOut = () => {

    const { setUser } = useContext(UserContext);

    const logOut = () => {
        API.logOut()
        .then(res => window.location = "/")
        .catch(err => console.log(err))
      };

    useEffect(() => {
        setUser(null);
        logOut();
    }, [setUser]);

        return (
            <div>
                <HomeNav />
                <Title />
                <h2>Logging Out...</h2>
            </div>
        );
    };

export default LogOut;