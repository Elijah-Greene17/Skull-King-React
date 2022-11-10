import styles from './TitleHeader.module.css';

const SecondaryHeader = (props) => {
    return <h1 className={styles.secondaryHeader}>{props.children}</h1>;
};

export default SecondaryHeader;
