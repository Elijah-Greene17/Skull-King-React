import styles from './Label.module.css';

const WinnerLabel = (props) => {
    return (
        <h3 className={`${styles.winnerLabel} ${props.className}`}>
            {props.children}
        </h3>
    );
};

export default WinnerLabel;
