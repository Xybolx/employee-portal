import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../components/context/userContext';
import EditUserContext from '../components/context/editUserContext';
import API from '../utils/API';
import Title from '../components/title/title';
import { PortalNav } from '../components/navbar';
import { Col } from '../components/grid';
import UseIdleTimer from '../components/windowEvents/useIdleTimer';
import { UserCardHeader, UserCardItem, UserCardSpan, DeleteBtn, ConfirmBtn, EditBtn } from '../components/card';


const Roster = () => {

    const { user } = useContext(UserContext);

    const [users, setUsers] = useState([]);

    const { setEditUser } = useContext(EditUserContext);

    const [toEdit, setToEdit] = useState(false);

    const reviseUser = roster => {
        setEditUser(roster);
        setTimeout(() => {
            setToEdit(true)
        }, 2000);

    };

    const adminInlineStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'inline' }
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

    if (toEdit === true) {
        return <Redirect to="/edit" />
    }

    return (
        <div>
            <PortalNav />
            <UseIdleTimer />
            {users && (
                <Col>
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
                                    Phone#:
                                        <UserCardSpan>
                                        &nbsp;
                                        {roster.phone}
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
                                        {roster.date}
                                    </UserCardSpan>
                                </UserCardItem>
                                <UserCardItem>
                                    Permissions:
                                        <UserCardSpan>
                                        &nbsp;{roster.permissions}
                                    </UserCardSpan>
                                </UserCardItem>
                                <DeleteBtn
                                    style={adminInlineStyle}
                                    data-toggle="modal"
                                    data-target={`#exampleModalCenter${roster.username}`}
                                ><i className="fas fa-trash-alt"></i> Delete Record
                                </DeleteBtn>
                                &nbsp;
                                <EditBtn
                                    className="btn btn-info btn-sm"
                                    style={adminInlineStyle}
                                    onClick={() => reviseUser(roster)}
                                ><i className="fas fa-user-edit"></i> Edit Record
                                </EditBtn>
                                <div className="modal fade" id={`exampleModalCenter${roster.username}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title" id="exampleModalCenterTitle">Confirm Delete</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span style={{ color: "yellow" }} aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <strong>Are you sure you want to delete {roster.firstName} {roster.lastName}?</strong>
                                            </div>
                                            <div className="modal-footer">
                                                <DeleteBtn data-dismiss="modal"><i className="fas fa-times fa-fw"></i></DeleteBtn>
                                                <ConfirmBtn data-dismiss="modal" onClick={() => deleteUser(roster._id)}><i className="fas fa-check fa-fw"></i></ConfirmBtn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
            )}
        </div>
    );
};

export default Roster;