import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './GameLobbyPage.module.css';

const GameLobbyPage = () => {
    return (
        <MainView>
            <div styles={styles.gameLobbyPage}>
                <TitleHeader>Skull King</TitleHeader>
            </div>
        </MainView>
    );
};

export default GameLobbyPage;
