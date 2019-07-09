import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../components/userContext';
import Title from '../components/title';
import { PortalNav } from '../components/navbar';
import UseIdleTimer from '../components/windowEvents/useIdleTimer';

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
            <UseIdleTimer />
            <div className="col-md-6 offset-md-3">
                <Title />
                <h3>{user.firstName} is logged in as ({user.permissions})</h3>
                <br />
                <h4><Link to="/roster"><i className="far fa-eye"></i> View Employee Roster</Link></h4>
                <h4 style={adminInlineStyle}><Link to="/entry"><i className="far fa-id-card"></i> Enter A New Record</Link></h4>
            </div>
        </div>
    );
}

export default Portal;