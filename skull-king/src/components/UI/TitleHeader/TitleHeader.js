import styles from './TitleHeader.module.css';

const TitleHeader = (props) => {
    return <h1 className={styles.titleHeader}>{props.children}</h1>;
};

export default TitleHeader;
