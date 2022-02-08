import { useContext, useEffect } from 'react';
import { AppContext } from '../../Contexts/AppContext';
import PlayerList from '../PlayerList/PlayerList';
import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './GameLobbyPage.module.css';
import socket from '../../Socket/Socket';

const GameLobbyPage = () => {
    const { gameId } = useContext(AppContext);

    useEffect(() => {
        socket.emit('pingSocket', 'Hello from React');
        console.log('Attepting to join room with id', gameId);
        socket.emit('joinRoom', gameId);
    }, []);

    return (
        <MainView>
            <div className={styles.gameLobbyPage}>
                <TitleHeader>Skull King</TitleHeader>
                <PlayerList
                    players={[
                        { id: 1, name: 'Elijah' },
                        { id: 2, name: 'Bridget' },
                        { id: 3, name: 'Mitchell' },
                        { id: 4, name: 'Hortense' },
                        { id: 5, name: 'Ally' },
                        { id: 6, name: 'Forrest' },
                        { id: 7, name: 'Veronica' },
                        { id: 8, name: 'John' },
                        { id: 9, name: 'Norm' },
                        { id: 10, name: 'Stove' },
                    ]}
                />
                <div>
                    <ApplicationInput value={gameId} readOnly={true}>
                        Invite Code
                    </ApplicationInput>
                    <Button className={styles.button}>Start</Button>
                </div>
            </div>
        </MainView>
    );
};

export default GameLobbyPage;
