import styles from './Scorecard.module.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Contexts/AppContext';
import TitleHeader from '../UI/TitleHeader/TitleHeader';

const Scorecard = () => {
    const { currentRound, scoreboard } = useContext(AppContext);

    const [players, setPlayers] = useState([])

    useEffect(() => {
        const john = scoreboard.players;
        setPlayers([...john].sort((a, b) => b.score - a.score));
    }, [scoreboard.players])

    return (
        <table className={styles.scoreCard}>
            <Row name="Player" bid="Bid" score="Score" />
            <Row />
            {
                players ?
                    players.map((player) => {
                        return (
                            <Row
                                name={player.name}
                                bid={player.boxes[currentRound - 1].bid}
                                score={player.score}
                            />
                        );
                    })
                    :
                    ""

            }
        </table>
    );
};

const Row = ({ name, bid, score }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{bid}</td>
            <td>{score}</td>
        </tr>
    );
};

export default Scorecard;
