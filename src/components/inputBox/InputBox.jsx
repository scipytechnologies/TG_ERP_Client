import React from 'react';
import { Form } from "react-bootstrap";
import debounce from 'lodash.debounce';

const InputBox = (props) => {
    const { label, name, err_msg, errors, setErrors, values, setValues, inputs, ...inputProps } = props;

    const validateInput = (name, value) => {
        console.log('vadiate funciton' + name, value, inputs)
        const config = inputs.find(config => config.name === name);
        if (config && config.pattern) {
            if (!config?.pattern.test(value)) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [name]: config.err_msg
                }));
            } else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [name]: ''
                }));
            }
        }
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        debouncedValidateInput(name, value);
    };

    const onBlur = (name, value) => {
        validateInput(name, value);
    };

    const debouncedValidateInput = debounce((name, value) => {
        validateInput(name, value);
    }, 1000);

    return (
        <div className="mt-1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...inputProps}
                name={name} // Add name prop
                onChange={onChange}
                onBlur={() => onBlur(name, values[name])}
            />
            {errors[name] && <p className='text-danger mt-1 mb-0'>{errors[name]}</p>}
        </div>
    );
};

export default InputBox;
