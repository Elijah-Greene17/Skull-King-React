import React from 'react';
import styles from './ApplicationInput.module.css';
import Label from '../Label/Label';

const ApplicationInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    };

    const handleClick = (e) => {
        props.onClick(e.target.value);
    };

    const handleBlur = (e) => {
        props.onBlur(e.target.value);
    };

    return (
        <div>
            <Label>{props.children}</Label>
            <input
                className={styles.input}
                value={props.value}
                onChange={props.onChange && handleChange}
                onClick={props.onClick && handleClick}
                onBlur={props.onBlur && handleBlur}
                readOnly={props.readOnly}
                maxLength={props.maxLength}
                disabled={props.disabled}
            />
        </div>
    );
};

export default ApplicationInput;
