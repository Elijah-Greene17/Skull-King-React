import Button from '../UI/Button/Button';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import SecondaryHeader from '../UI/TitleHeader/TitleHeader';
import WinnerLabel from '../UI/Label/WinnerLabel';
import Label from '../UI/Label/Label';
import styles from './GameOverPage.module.css';
import { useContext } from 'react';
import { AppContext } from '../../Contexts/AppContext';

const GameOverPage = () => {
    const { winner } = useContext(AppContext);

    return (
        <MainView>
            <div className={styles.gameOverPage}>
                <TitleHeader>Winner</TitleHeader>
                <div>
                    <WinnerLabel>{winner.name}</WinnerLabel>
                    <Label>{winner.score}</Label>
                </div>

                <Button onClick={() => {}}>HOME</Button>
            </div>
        </MainView>
    );
};

export default GameOverPage;
