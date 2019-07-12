import React from 'react';

export const Col = ({ children }) => {
    return (
        <div className="col-md-6 offset-md-3">
            {children}
        </div>
    );
};