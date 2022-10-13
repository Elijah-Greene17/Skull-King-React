import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import socket from '../../Socket/Socket';
import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './BidPage.module.css';

const BidPage = () => {
    const { id, gameId, currentRound, setScoreboard } = useContext(AppContext);
    const navigate = useNavigate();

    const [bid, setBid] = useState();

    useEffect(() => {
        socket.on('bidsAreIn', (data) => {
            console.log('DATA.SCOREBOARD: ', data.scoreBoard);
            setScoreboard(data.scoreBoard);
            navigate('/scorecard');
        });
    }, []);

    return (
        <MainView>
            <div className={styles.bidPage}>
                <TitleHeader>Round {currentRound}</TitleHeader>
                <ApplicationInput
                    onChange={(value) => {
                        setBid(value);
                    }}
                    maxLength={2}
                    type="number"
                >
                    Input Bid
                </ApplicationInput>
                <Button
                    onClick={() => {
                        if (isNaN(bid)) {
                            console.log('Error, the bid is not a number');
                        } else {
                            const data = {
                                playerId: id,
                                gameId: gameId,
                                bid: bid,
                            };
                            socket.emit('bid', data);
                        }
                    }}
                >
                    BID
                </Button>
            </div>
        </MainView>
    );
};

export default BidPage;
