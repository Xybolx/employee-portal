import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../components/userContext';
import Title from '../components/title';
import { PortalNav } from '../components/navbar';
import UseListeners from '../components/listeners/useListeners';

const Portal = () => {

    const { user } = useContext(UserContext);

    const adminInlineStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'inline' }
            : { display: 'none' }
    };

    return (
        <div>
            <PortalNav />
            <UseListeners />
            <div className="col-md-6 offset-md-3">
                <Title />
                <h3>Welcome, {user.firstName} {user.lastName}</h3>
                <h4 style={adminInlineStyle}>Enter New Employee&nbsp;<Link to="/entry">Here</Link></h4>
                <h4><Link to="/roster">View</Link>&nbsp;Employee Roster</h4>
            </div>
        </div>
    );
}

export default Portal;