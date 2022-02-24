import styles from './Scorecard.module.css';

const Scorecard = () => {
    return (
        <table className={styles.scoreCard}>
            <Row name="Player" bid="Bid" score="Score" />
            <Row />
            <Row name="Elijah" bid="4" score="230" />
            <Row name="Elijah" bid="4" score="230" />
            <Row name="Elijah" bid="4" score="230" />
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
