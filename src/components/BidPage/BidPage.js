import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import socket from '../../Socket/Socket';
import Button from '../UI/Button/Button';
import Label from '../UI/Label/Label';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './BidPage.module.css';
import Error from '../Error/Error';

const BidPage = () => {
    const { id, gameId, currentRound, scoreboard, setScoreboard, error, setError } =
        useContext(AppContext);
    const navigate = useNavigate();

    const [bid, setBid] = useState('');
    const [bidEntered, setBidEntered] = useState(false);

    useEffect(() => {
        socket.on('bidsAreIn', (data) => {
            setError('');
            setScoreboard(data.scoreBoard);
            localStorage.setItem('skScoreboard', data.scoreBoard)
            console.log("EGGGGG: ", localStorage.getItem('skScoreboard'))
            navigate('/scorecard');
        });
    }, []);

    return (
        <MainView>
            <div className={styles.bidPage}>
                <Error message={error} hidden={error.length === 0} />
                <TitleHeader>Round {currentRound}</TitleHeader>
                <ApplicationInput
                    onChange={(value) => {
                        setBid(value);
                    }}
                    maxLength={2}
                >
                    Input Bid
                </ApplicationInput>
                {bidEntered ? (
                    <Label className={styles.waitingLabel}>Bid locked</Label>
                ) : (
                    <Button
                        onClick={() => {
                            if (bid.length === 0) {
                                setError('Please enter a bid');
                            } else if (isNaN(bid)) {
                                setError('The bid is not a number');
                            } else {
                                setError('');
                                const data = {
                                    playerId: id,
                                    gameId: gameId,
                                    bid: bid,
                                };
                                socket.emit('bid', data);
                                setBidEntered(true);
                            }
                        }}
                    >
                        BID
                    </Button>
                )}
            </div>
        </MainView>
    );
};

export default BidPage;
