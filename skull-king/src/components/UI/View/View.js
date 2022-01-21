import styles from './View.module.css';

const View = (props) => {
    return (
        <div className={styles.view}>
            {props.children}
        </div>
    );
};

export default View;
