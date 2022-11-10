import styles from './Error.module.css';

const Error = (props) => {
    return (
        <div className={styles.error}>
            <h2>{props.message}</h2>
        </div>
    )
}

export default Error;