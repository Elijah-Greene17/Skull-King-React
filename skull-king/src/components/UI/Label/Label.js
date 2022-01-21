import styles from './Label.module.css';

const Label = (props) => {
    return <h3 className={styles.label}>{props.children}</h3>;
};

export default Label;
