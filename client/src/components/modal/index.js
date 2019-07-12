import React from 'react';
import './modal.css';

export const ModalFade = ({ children }) => {
    return (
        <div className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            {children}
        </div>
    );
};

export const ModalDialog = ({ children }) => {
    return (
        <div className="modal-dialog modal-dialog-centered" role="document">
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

export const ModalHeader = () => {
    return (
        <div className="modal-header">
            <h4 className="modal-title" id="exampleModalCenterTitle">Confirm Delete</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span style={{ color: "yellow" }} aria-hidden="true">&times;</span>
            </button>
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