import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './HarryPage.module.css';
import { AppContext } from '../../Contexts/AppContext';
import { useContext, useEffect, useState } from 'react';
import socket from '../../Socket/Socket';
import { useNavigate } from 'react-router-dom';

const HarryPage = () => {
    const { id, gameId, scoreboard, currentRound } = useContext(AppContext);

    const [bidToChange, setBidToChange] = useState(
        scoreboard.players[id].boxes[currentRound - 1].bid
    );

    const navigate = useNavigate();

    const increment = () => {
        if (
            bidToChange - scoreboard.players[id].boxes[currentRound - 1].bid <=
            0
        ) {
            setBidToChange(parseInt(bidToChange) + 1);
        }
    };

    const decrement = () => {
        if (
            scoreboard.players[id].boxes[currentRound - 1].bid - bidToChange <=
                0 &&
            bidToChange > 0
        ) {
            setBidToChange(parseInt(bidToChange) - 1);
        }
    };

    const handleButtonSubmit = () => {
        if (
            scoreboard.players[id].boxes[currentRound - 1].bid - bidToChange !=
            0
        ) {
            const data = {
                gameId: gameId,
                playerId: id,
                bidIncrement:
                    bidToChange -
                    scoreboard.players[id].boxes[currentRound - 1].bid,
            };
            socket.emit('harry', data);
        }
        navigate('/scorecard');
    };

    return (
        <MainView>
            <div className={styles.harryPage}>
                <TitleHeader>Harry</TitleHeader>
                <div>
                    <ApplicationInput value={bidToChange} disabled={true}>
                        Increment or Decrement
                    </ApplicationInput>
                    <div className={styles.pirates}>
                        <Button
                            onClick={decrement}
                            className={styles.pirateButton}
                        >
                            -
                        </Button>
                        <Button
                            onClick={increment}
                            className={styles.pirateButton}
                        >
                            +
                        </Button>
                    </div>
                </div>
                <Button onClick={handleButtonSubmit}>Submit</Button>
            </div>
        </MainView>
    );
};

export default HarryPage;
