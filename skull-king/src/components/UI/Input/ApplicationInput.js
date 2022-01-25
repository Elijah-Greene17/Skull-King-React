import React, { useState } from 'react';
import styles from './ApplicationInput.module.css';
import Label from '../Label/Label';

const ApplicationInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <div>
            <Label>{props.children}</Label>
            <input className={styles.input} onChange={handleChange} />
        </div>
    );
};

export default ApplicationInput;
