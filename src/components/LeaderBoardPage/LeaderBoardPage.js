import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import PlayerList from '../PlayerList/PlayerList';
import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './LeaderBoardPage.module.css';
import socket from '../../Socket/Socket';
import Label from '../UI/Label/Label';

const LeaderBoardPage = () => {
    const {
        id,
        setId,
        name,
        gameId,
        host,
        setHost,
        playerList,
        setPlayerList,
        currentRound,
        setCurrentRound,
        scoreboard,
        setScoreboard,
        setWinner,
        setHarryToggle,
        setRascalToggle,
    } = useContext(AppContext);
    const navigate = useNavigate();

    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        socket.on('leaderboard', (data) => {
            const john = data.players.players;
            console.log('JOHN: ', john);
            setLeaders([...john].sort((a, b) => b.score - a.score));
        });

        fetch(`https://server-skull-king.herokuapp.com/updateLeaderBoard/${localStorage.getItem('skGameId')}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                }
            })
            .then((data) => {
                if (data) {
                    console.log("Success")
                }
            });

        socket.on('isRoundOver', (data) => {
            console.log('DATA: ', data);
            setScoreboard(data.scoreBoard);
            console.log("EGGGGG: ", localStorage.getItem('skScoreboard'))
            localStorage.setItem('skScoreboard', data.scoreBoard)
            if (data.gameIsOver) {
                setHarryToggle(true);
                localStorage.setItem('skHarryToggle', true)
                setRascalToggle(true);
                localStorage.setItem('skRascalToggle', true)
                localStorage.removeItem('skGameId')
                localStorage.removeItem('skPlayerId')
                navigate('/gameover');
            } else if (data.roundIsOver) {
                setHarryToggle(true);
                localStorage.setItem('skHarryToggle', true)
                setRascalToggle(true);
                localStorage.setItem('skRascalToggle', true)
                localStorage.setItem('skCurrentRound', parseInt(currentRound) + 1)
                setCurrentRound(parseInt(currentRound) + 1);
                navigate('/bid');
            } else {
                console.log('round not over');
            }
        });
    }, []);

    useEffect(() => {
        if (leaders.length > 0) {
            console.log('LEADERS: ', leaders[0].name);
            setWinner(leaders[0]);
            localStorage.setItem('skWinner', leaders[0])
        }
    }, [leaders]);

    return (
        <MainView>
            <div className={styles.leaderBoardPage}>
                <TitleHeader>Leaderboard</TitleHeader>
                <table className={styles.scoreCard}>
                    <Row name="Player" score="Score" />
                    <Row />
                    {leaders.map((player) => {
                        return (
                            <Row
                                name={player.name}
                                score={player.score}
                                key={player.id}
                            />
                        );
                    })}
                </table>
                <div>
                    {id === host ? (
                        leaders.length === playerList.length ? (
                            <Button
                                className={styles.button}
                                onClick={() => {
                                    socket.emit('isRoundOver', {
                                        gameId: gameId,
                                    });
                                }}
                            >
                                Next Round
                            </Button>
                        ) : (
                            <Label className={styles.waitingLabel}>
                                Waiting for everyone...
                            </Label>
                        )
                    ) : (
                        <Label className={styles.waitingLabel}>
                            Waiting for next round...
                        </Label>
                    )}
                </div>
            </div>
        </MainView>
    );
};

const Row = ({ name, score }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{score}</td>
        </tr>
    );
};

export default LeaderBoardPage;
