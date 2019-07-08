import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/title';
import { HomeNav } from '../components/navbar';

const Home = () => {

    return (
        <div>
            <HomeNav />
            <div className="col-md-6 offset-md-3">
                <Title />
                <h2>Employee Portal</h2>
                <h3><Link to="/login">Login</Link>&nbsp;To Access</h3>
            </div>
        </div>
    );
};

export default Home;