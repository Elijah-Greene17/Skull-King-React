import Button from '../UI/Button/Button';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import SecondaryHeader from '../UI/TitleHeader/TitleHeader';
import WinnerLabel from '../UI/Label/WinnerLabel';
import Label from '../UI/Label/Label';
import styles from './GameOverPage.module.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import Scorecard from '../ScorecardPage/Scorecard';

const GameOverPage = () => {
    const navigate = useNavigate();
    const [leaders, setLeaders] = useState([]);
    const {
        setId,
        setName,
        setHost,
        setGameId,
        setPlayerList,
        setCurrentRound,
        scoreboard,
        setScoreboard,
        setWinner,
        setError,
        setHarryToggle,
        setRascalToggle,
    } = useContext(AppContext);

    useEffect(() => {
        const john = scoreboard.players;
        setLeaders([...john].sort((a, b) => b.score - a.score));
    }, []);

    return (
        <MainView>
            <div className={styles.gameOverPage}>
                <TitleHeader>Results</TitleHeader>
                <table className={styles.scoreCard}>
                    {/* <Row name="Player" score="Score" /> */}
                    <Row />
                    {leaders.map((player, ind) => {
                        return (
                            <Row
                                rank={ind + 1}
                                name={player.name}
                                score={player.score}
                                key={player.id}
                            />
                        );
                    })}
                </table>
                {/* <div>
                    <WinnerLabel>{winner.name}</WinnerLabel>
                    <Label>{winner.score}</Label>
                </div> */}

                <Button
                    onClick={() => {
                        setId(-1);
                        setName('');
                        setHost('');
                        setGameId('');
                        setPlayerList([]);
                        setCurrentRound(0);
                        setScoreboard({});
                        setWinner({});
                        setError('');
                        setHarryToggle(true);
                        setRascalToggle(true);
                        navigate('/');
                    }}
                >
                    HOME
                </Button>
            </div>
        </MainView>
    );
};

const Row = ({ rank, name, score }) => {
    return (
        <tr>
            <td>{rank}</td>
            <td className={styles.name}>{name}</td>
            <td>{score}</td>
        </tr>
    );
};

export default GameOverPage;
