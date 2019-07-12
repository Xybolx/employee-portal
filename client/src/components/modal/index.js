import React from 'react';
import './modal.css';

export const ModalFade = ({ children }) => {
    return (
        <div className="modal fade">
            {children}
        </div>
    );
};

export const ModalDialog = ({ children }) => {
    return (
        <div className="modal-dialog modal-dialog-centered">
            {children}
        </div>
    );
};

export const ModalContent = ({ children }) => {
    return (
        <div className="modal-content">
            {children}
        </div>
    );
};

export const ModalHeader = ({ children }) => {
    return (
        <div className="modal-header">
            {children}
        </div>
    );
};

export const ModalBody = ({ children }) => {
    return (
        <div className="modal-body">
            {children}
        </div>
    );
};

export const ModalFooter = ({ children }) => {
    return (
        <div className="modal-footer">
            {children}
        </div>
    );
};