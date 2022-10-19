import MainView from '../UI/MainView/MainView';
import SecondaryHeader from '../UI/TitleHeader/SecondaryHeader';
import ApplicationInput from '../UI/Input/ApplicationInput';
import styles from './CalculateScorePage.module.css';
import Button from '../UI/Button/Button';
import { useContext, useState } from 'react';
import { AppContext } from '../../Contexts/AppContext';
import socket from '../../Socket/Socket';
import { useNavigate } from 'react-router-dom';

const CalculateScorePage = () => {
    const { id, gameId, currentRound, scoreboard } = useContext(AppContext);
    const [tricks, setTricks] = useState();
    const [bonus, setBonus] = useState(0);
    const navigate = useNavigate();

    const calculateScore = () => {
        // const pBid = getBid();
        // console.log(pBid);
        if (tricks && !isNaN(tricks) && !isNaN(bonus)) {
            if (!bonus) {
                setBonus(0);
            }
            const data = {
                playerId: id,
                gameId,
                tricks,
                bonus,
            };
            console.log('DATA: ', data);
            socket.emit('calculate', data);
            navigate('/leaderboard');
        } else {
            console.log('Error with tricks and bonus');
        }
    };

    return (
        <MainView>
            <div className={styles.calculateScorePage}>
                <div>
                    <SecondaryHeader>
                        How many tricks did you win?
                    </SecondaryHeader>
                    <ApplicationInput
                        onChange={(value) => {
                            setTricks(value);
                        }}
                        maxLength={2}
                    />
                </div>
                <div>
                    <SecondaryHeader>
                        How many bonus points did you receive?
                    </SecondaryHeader>
                    <ApplicationInput
                        value={bonus}
                        onChange={(value) => {
                            setBonus(value);
                        }}
                    />
                </div>
                <Button onClick={calculateScore}>NEXT</Button>
            </div>
        </MainView>
    );
};

export default CalculateScorePage;
