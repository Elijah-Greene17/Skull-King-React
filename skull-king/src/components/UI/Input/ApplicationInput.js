import styles from './ApplicationInput.module.css';
import Label from '../Label/Label';

const ApplicationInput = (props) => {
    return (
        <div>
            <Label>{props.children}</Label>
            <input className={styles.input} value={props.value} />
        </div>
    );
};

export default ApplicationInput;
