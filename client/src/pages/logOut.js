import React, { useContext, useEffect } from 'react';
import UserContext from '../components/context/userContext';
import Title from '../components/title/title';
import { LogOutNav } from '../components/navbar';
import { Col } from '../components/grid';
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
                <LogOutNav />
                <Col>
                <Title />
                <h2>Logging Out...</h2>
                </Col>
            </div>
        );
    };

export default LogOut;