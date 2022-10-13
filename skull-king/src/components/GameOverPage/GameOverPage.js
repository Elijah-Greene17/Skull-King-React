import Button from '../UI/Button/Button';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './GameOverPage.module.css';

const GameOverPage = () => {
    return (
        <MainView>
            <div className={styles.gameOverPage}>
                <TitleHeader>Winner</TitleHeader>

                <Button onClick={() => {}}>HOME</Button>
            </div>
        </MainView>
    );
};

export default GameOverPage;
