import styles from './Error.module.css';

const Error = (props) => {
    return (
        <div className={`${styles.error} ${props.hidden && styles.hidden}`}>
            <div className={styles.message}>{props.message}</div>
        </div>
    );
};

export default Error;
