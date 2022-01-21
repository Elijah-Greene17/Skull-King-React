import styles from './MainView.module.css';

const MainView = (props) => {
    return <div className={styles.mainView}>{props.children}</div>;
};

export default MainView;
