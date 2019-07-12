import React from 'react';
import './card.css';

export const UserCardHeader = ({ children }) => {
    return (
        <h4>
            {children}
        </h4>
    );
};

export const UserCardItem = ({ children }) => {
    return (
        <h6
            className="card-title">
            {children}
        </h6>
    );
};

export const UserCardSpan = ({ children }) => {
    return (
        <span
            className="text-muted">
            {children}
        </span>
    );
};

export const DeleteBtn = props => {
    return (
        <button
            className="btn btn-danger btn-sm"
            {...props}
        />
    );
};

export const ConfirmBtn = props => {
    return (
        <button
            className="btn btn-success btn-sm"
            {...props}
        />
    );
};

export const EditBtn = props => {
    return (
        <button
            className="btn btn-info btn-sm"
            {...props}
        />
    );
};