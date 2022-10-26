import { useNavigate } from 'react-router-dom';
import MainView from '../UI/MainView/MainView';
import Scorecard from './Scorecard';
import Button from '../UI/Button/Button';
import styles from './ScorecardPage.module.css';
import { AppContext } from '../../Contexts/AppContext';
import { useEffect, useContext } from 'react';
import socket from '../../Socket/Socket';

const ScorecardPage = () => {
    const {
        setScoreboard,
        harryToggle,
        setHarryToggle,
        rascalToggle,
        setRascalToggle,
    } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        socket.on('harry', (data) => {
            setScoreboard(data.scoreBoard);
            setHarryToggle(false);
        });

        socket.on('rascal', (data) => {
            // setHarryToggle(false);
            setRascalToggle(false);
        });
    }, []);

    const handleCalculateScore = () => {
        navigate('/calculatescore');
    };

    return (
        <MainView>
            <div className={styles.scorecardPage}>
                <Scorecard />
                <div>
                    <div className={styles.pirates}>
                        <Button
                            onClick={() => {
                                navigate('/harry');
                            }}
                            className={
                                harryToggle
                                    ? styles.pirateButton
                                    : styles.pirateButtonDisabled
                            }
                        >
                            Harry
                        </Button>

                        <Button
                            onClick={() => {
                                navigate('/rascal');
                            }}
                            className={
                                rascalToggle
                                    ? styles.pirateButton
                                    : styles.pirateButtonDisabled
                            }
                        >
                            Rascal
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleCalculateScore}>
                            Calculate Score
                        </Button>
                    </div>
                </div>
            </div>
        </MainView>
    );
};

export default ScorecardPage;
