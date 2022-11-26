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
        /**/
        id,
        setId,
        name,
        setName,
        host,
        setHost,
        gameId,
        setGameId,
        playerList,
        setPlayerList,
        currentRound,
        setCurrentRound,
        scoreboard,
        setScoreboard,
        winner,
        setWinner,
        error,
        setError,
        harryToggle,
        setHarryToggle,
        rascalToggle,
        setRascalToggle,
        /**/
        // setScoreboard,
        // harryToggle,
        // setHarryToggle,
        // rascalToggle,
        // setRascalToggle,
    } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Data I need to know")
        console.log(id)
        console.log(name)
        console.log(host)
        console.log(gameId)
        console.log(playerList)
        console.log(currentRound)
        console.log(scoreboard)
        console.log(winner)
        console.log(harryToggle)
        console.log(rascalToggle)


        socket.on('harry', (data) => {
            setScoreboard(data.scoreBoard);
            console.log("EGGGGG: ", localStorage.getItem('skScoreboard'))
            localStorage.setItem('skScoreboard', data.scoreBoard)
            setHarryToggle(false);
            localStorage.setItem('skHarryToggle', false)
        });

        socket.on('rascal', (data) => {
            setScoreboard(data.scoreBoard);
            console.log("EGGGGG: ", localStorage.getItem('skScoreboard'))
            localStorage.setItem('skScoreboard', data.scoreBoard)
            setRascalToggle(false);
            localStorage.setItem('skRascalToggle', true)
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
                    <div className={styles.pirates}>
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
