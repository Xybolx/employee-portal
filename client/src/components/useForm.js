import { useState } from 'react';

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