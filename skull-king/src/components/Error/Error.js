import styles from './Error.module.css';

const Error = (props) => {
    return (
        <div className={`${styles.error} ${props.hidden && styles.hidden}`}>
            <h6>{props.message}</h6>
        </div>
    );
};

export default Error;
