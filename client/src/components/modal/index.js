import React from 'react';
import './modal.css';

export const ModalFade = ({children}, props) => {
    return (
        <div {...props} className="modal fade">
            {children}
        </div>
    );
};

export const ModalDialog = ({children}, props) => {
    return (
        <div {...props} className="modal-dialog modal-dialog-centered">
            {children}
        </div>
    );
};

export const ModalContent = ({children}, props) => {
    return (
        <div {...props} className="modal-content">
            {children}
        </div>
    );
};

export const ModalHeader = ({children}, props) => {
    return (
        <div {...props} className="modal-header">
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