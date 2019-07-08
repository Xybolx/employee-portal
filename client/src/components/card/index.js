import React from 'react';

export const UserCardHeader = ({ children }) => {
    return (
        <h4>{children}</h4>
    );
};

export const UserCardItem = ({ children }) => {
    return (
        <h6 className="card-title">{children}</h6>
    );
};

export const UserCardSpan = ({ children }) => {
    return (
        <span className="text-muted">{children}</span>
    );
};

export const DeleteBtn = props => {
    return (
        <button {...props} />
    );
};