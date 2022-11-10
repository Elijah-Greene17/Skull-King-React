import styles from './Scorecard.module.css';
import { useContext } from 'react';
import { AppContext } from '../../Contexts/AppContext';

const Scorecard = () => {
    const { currentRound, scoreboard } = useContext(AppContext);

    return (
        <table className={styles.scoreCard}>
            <Row name="Player" bid="Bid" score="Score" />
            <Row />
            {scoreboard.players.map((player) => {
                return (
                    <Row
                        name={player.name}
                        bid={player.boxes[currentRound - 1].bid}
                        score={player.score}
                    />
                );
            })}
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
