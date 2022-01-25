import { useState } from 'react';
import styles from './ApplicationInput.module.css';
import Label from '../Label/Label';

const ApplicationInput = (props) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <Label>{props.children}</Label>
            <input
                className={styles.input}
                value={text}
                onChange={handleChange}
            />
        </div>
    );
};

export default ApplicationInput;
