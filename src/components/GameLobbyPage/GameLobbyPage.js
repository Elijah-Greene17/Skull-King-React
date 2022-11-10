import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import PlayerList from '../PlayerList/PlayerList';
import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './GameLobbyPage.module.css';
import socket from '../../Socket/Socket';
import Label from '../UI/Label/Label';

const GameLobbyPage = () => {
    const {
        id,
        setId,
        name,
        gameId,
        host,
        setHost,
        playerList,
        setPlayerList,
        setCurrentRound,
        setScoreboard,
    } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Test Connection with Socket
        socket.emit('pingSocket', 'Hello from React');

        // Join room *Will create new if doesn't exist*
        console.log('Attepting to join room with id', gameId);
        const data = {
            gameId: gameId,
            name: name,
        };
        socket.emit('joinGame', data);

        // Client Listeners
        socket.on('pingClient', (msg) => {
            console.log('New Message: ', msg);
        });

        socket.on('setPlayerId', (playerId) => {
            setId(playerId);
        });

        socket.on('gameJoined', (data) => {
            console.log('game Joined Data: ', data);
            setPlayerList(data.playerList);
            setHost(data.playerList[0]);
        });

        socket.on('removePlayer', (data) => {
            console.log('removing player');
            setPlayerList(data.players);
            setHost(data.players[0]);
        });

        socket.on('start', (data) => {
            console.log('Starting Game: ', data);
            setCurrentRound(data.currentRound);
            setScoreboard(data.scoreBoard);
            navigate('/bid');
        });
    }, []);

    return (
        <MainView>
            <div className={styles.gameLobbyPage}>
                <TitleHeader>Skull King</TitleHeader>
                <PlayerList players={playerList} />
                <div>
                    <ApplicationInput value={gameId} readOnly={true}>
                        Invite Code
                    </ApplicationInput>

                    {id === host.id ? (
                        <Button
                            className={styles.button}
                            onClick={() => {
                                const data = {
                                    gameId: gameId,
                                };
                                socket.emit('start', data);
                            }}
                        >
                            Start
                        </Button>
                    ) : (
                        <Label className={styles.waitingLabel}>
                            Waiting for host...
                        </Label>
                    )}
                </div>
            </div>
        </MainView>
    );
};

export default GameLobbyPage;
