import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../components/context/userContext';
import Title from '../components/title/title';
import { PortalNav } from '../components/navbar';
import { Col } from '../components/grid';
import UseIdleTimer from '../components/windowEvents/useIdleTimer';

const Portal = () => {

    const { user } = useContext(UserContext);

    const adminBlockStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'block' }
            : { display: 'none' }
    };

    return (
        <div>
            <PortalNav />
            <UseIdleTimer />
            <Col id="portalTitle">
                <Title />
                <div>
                    <h3>Logged in as...
                    <p>{user.firstName} {user.lastName} ({user.permissions})</p>
                    </h3>
                </div>
                <div>
                    <h4 style={adminBlockStyle}>
                        <Link
                            to="/entry">
                            <span className="far fa-id-card fa-fw"></span>
                            New Record
                            </Link>
                    </h4>
                    &nbsp;
                    <h4>
                        <Link to="/roster">
                            <span className="far fa-eye fa-fw"></span>
                            View Roster
                            </Link>
                    </h4>
                </div>
            </Col>
        </div>
    );
}

export default Portal;