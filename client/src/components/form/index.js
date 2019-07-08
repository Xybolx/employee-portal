import React from 'react';

export const Label = props => {
  return (
    <label {...props} />
  );
};

export const Input = props => {
  return (
    <div className="form-group">
      <input className="form-control input" {...props} />
    </div>
  );
};

export const Select = props => {
  return (
    <div className="form-group">
      <select className="form-control input" {...props}>
        <option></option>
        <option>Employee</option>
        <option>Admin</option>
      </select>
    </div>
  );
};

export const FormBtn = props => {
  return (
    <button {...props} className="btn btn-dark btn-block">
      {props.children}
    </button>
  );
};