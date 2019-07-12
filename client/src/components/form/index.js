import React from 'react';
import { useState } from 'react';
import './form.css';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        ev => {
            setValues({
                ...values,
                [ev.target.name]: ev.target.value
            });
        }
    ];
};

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
    <button {...props} className="submit btn btn-dark btn-block">
     {props.children}
    </button>
  );
};