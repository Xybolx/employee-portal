import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../components/userContext';
import moment from 'moment';
import API from '../utils/API';
import Title from '../components/title';
import { PortalNav } from '../components/navbar';
import UseListeners from '../components/listeners/useListeners';
import { 
    UserCardHeader, 
    UserCardItem, 
    UserCardSpan, 
    DeleteBtn 
} from '../components/card';


const Roster = () => {

    const { user } = useContext(UserContext);

    const [users, setUsers] = useState([]);

    const adminBlockStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'block' }
            : { display: 'none' }
    };

    const loadRoster = () => {
        API.getUsers()
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    };

    const deleteUser = id => {
        API.deleteUser(id)
            .then(res => loadRoster())
            .catch(err => console.log(err));
    };

    useEffect(() => {
        loadRoster();
    }, []);

    return (
        <div>
            <PortalNav />
            <UseListeners />
            {users && (
                <div className="users container col-md-6 offset-md-3">
                    <Title />
                    <h2>Employee Roster</h2>
                    {users.map(roster => (
                        <div className="card" key={roster._id}>
                            <div className="card-header">
                                <UserCardHeader>
                                    {roster.firstName} {roster.lastName}
                                </UserCardHeader>
                            </div>
                            <div className="card-body text-left">
                                <UserCardItem>
                                    ID#:
                                        <UserCardSpan>
                                        &nbsp;
                                        {roster._id}
                                    </UserCardSpan>
                                </UserCardItem>
                                <UserCardItem>
                                    Email:
                                        <UserCardSpan>
                                        &nbsp;
                                        {roster.email}
                                    </UserCardSpan>
                                </UserCardItem>
                                <UserCardItem>
                                    Username:
                                        <UserCardSpan>
                                        &nbsp;
                                        {roster.username}
                                    </UserCardSpan>
                                </UserCardItem>
                                <UserCardItem>
                                    Position:
                                        <UserCardSpan>
                                        &nbsp;
                                        {roster.position}
                                    </UserCardSpan>
                                </UserCardItem>
                                <UserCardItem>
                                    Hire Date:
                                        <UserCardSpan>
                                        &nbsp;
                                        {moment(roster.date).format('MM/D/YYYY')}
                                    </UserCardSpan>
                                </UserCardItem>
                                <UserCardItem>
                                    Permissions:
                                        <UserCardSpan>
                                        &nbsp;{roster.permissions}
                                    </UserCardSpan>
                                </UserCardItem>
                                <DeleteBtn
                                    className="btn btn-danger btn-sm"
                                    style={adminBlockStyle}
                                    data-toggle="collapse"
                                    data-target={`#collapse${roster.username}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse ${roster.username}`}
                                >Delete Record
                                </DeleteBtn>
                                <br />
                                <div id={`collapse${roster.username}`} className="collapse">
                                    <strong>Are you sure you want to delete {roster.firstName} {roster.lastName}?</strong>
                                    <div className="text-right">
                                        <DeleteBtn
                                            className="btn btn-success btn-md"
                                            onClick={() => deleteUser(roster._id)}
                                        >Yes
                                    </DeleteBtn>
                                        &nbsp;
                                        &nbsp;
                                    <DeleteBtn
                                            className="btn btn-danger btn-md"
                                            data-toggle="collapse"
                                            data-target={`#collapse${roster.username}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse ${roster.username}`}
                                        >No
                                    </DeleteBtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Roster;