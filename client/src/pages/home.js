import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/title/title';
import { HomeNav } from '../components/navbar';
import { Col } from '../components/grid';

const Home = () => {

    return (
        <div>
            <HomeNav />
            <Col id="homeTitle">
                <Title />
                <h2>Employee Portal</h2>
                <h3><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>&nbsp;to access</h3>
            </Col>
        </div>
    );
};

export default Home;