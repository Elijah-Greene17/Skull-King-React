import styles from './Input.module.css';

const Input = (props) => {
    return <input className={styles.input} value={props.value} />;
};

export default Input;
