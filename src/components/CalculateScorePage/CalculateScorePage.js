import MainView from '../UI/MainView/MainView';
import SecondaryHeader from '../UI/TitleHeader/SecondaryHeader';
import ApplicationInput from '../UI/Input/ApplicationInput';
import styles from './CalculateScorePage.module.css';
import Button from '../UI/Button/Button';
import { useContext, useState } from 'react';
import { AppContext } from '../../Contexts/AppContext';
import socket from '../../Socket/Socket';
import { useNavigate } from 'react-router-dom';
import Error from '../Error/Error';

const CalculateScorePage = () => {
    const { id, gameId, error, setError } = useContext(AppContext);
    const [tricks, setTricks] = useState();
    const [bonus, setBonus] = useState(0);
    const navigate = useNavigate();

    const calculateScore = () => {
        if (tricks && !isNaN(tricks) && !isNaN(bonus)) {
            setError('');
            if (!bonus) {
                setBonus(0);
            }
            const data = {
                playerId: id,
                gameId,
                tricks,
                bonus: parseInt(bonus),
            };
            socket.emit('calculate', data);
            navigate('/leaderboard');
        } else {
            if (!tricks) {
                setError('Please enter the amount of tricks you won');
            } else if (isNaN(tricks)) {
                setError('The amount of tricks is not a number');
            } else if (isNaN(bonus)) {
                setError('The bonus points is not a number');
            }
        }
    };

    return (
        <MainView>
            <div className={styles.calculateScorePage}>
                <Error message={error} hidden={error.length === 0} />
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
                        onClick={(value) => {
                            if (value === '0') {
                                setBonus('');
                            }
                        }}
                        onChange={(value) => {
                            setBonus(value);
                        }}
                        onBlur={(value) => {
                            if (value === '') {
                                setBonus(0);
                            }
                        }}
                        maxLength={3}
                    />
                </div>
                <Button onClick={calculateScore}>NEXT</Button>
            </div>
        </MainView>
    );
};

export default CalculateScorePage;
