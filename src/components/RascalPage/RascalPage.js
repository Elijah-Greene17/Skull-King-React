import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import Button from '../UI/Button/Button';
import Label from '../UI/Label/Label';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './RascalPage.module.css';
import socket from '../../Socket/Socket';

const RascalPage = () => {
    const { id, gameId } = useContext(AppContext);
    const [wager, setWager] = useState(0);
    const navigate = useNavigate();

    const handleWagerSubmit = () => {
        const data = {
            gameId: gameId,
            playerId: id,
            wager: wager,
        };
        console.log('Emitting Rascal: ', data);
        socket.emit('rascal', data);
        navigate('/scorecard');
    };

    return (
        <MainView>
            <div className={styles.rascalPage}>
                <TitleHeader>Rascal</TitleHeader>
                <div>
                    <Label>What do you wager?</Label>
                    <div className={styles.pirates}>
                        <Button
                            onClick={() => {
                                setWager(0);
                            }}
                            className={
                                wager === 0
                                    ? styles.pirateButtonSelected
                                    : styles.pirateButton
                            }
                        >
                            0
                        </Button>
                        <Button
                            onClick={() => {
                                setWager(10);
                            }}
                            className={
                                wager === 10
                                    ? styles.pirateButtonSelected
                                    : styles.pirateButton
                            }
                        >
                            10
                        </Button>
                        <Button
                            onClick={() => {
                                setWager(20);
                            }}
                            className={
                                wager === 20
                                    ? styles.pirateButtonSelected
                                    : styles.pirateButton
                            }
                        >
                            20
                        </Button>
                    </div>
                </div>
                <Button onClick={handleWagerSubmit}>Wager</Button>
            </div>
        </MainView>
    );
};

export default RascalPage;
