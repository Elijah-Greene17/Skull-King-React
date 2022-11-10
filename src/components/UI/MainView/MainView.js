import styles from './MainView.module.css';

const MainView = (props) => {
    return (
        <div className={`${styles.mainView} ${styles[props.className]}`}>
            {props.children}
        </div>
    );
};

export default MainView;
