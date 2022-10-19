import { useNavigate } from 'react-router-dom';
import MainView from '../UI/MainView/MainView';
import Scorecard from './Scorecard';
import Button from '../UI/Button/Button';
import styles from './ScorecardPage.module.css';
import { AppContext } from '../../Contexts/AppContext';

const ScorecardPage = () => {
    const navigate = useNavigate();

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
                                console.log('harry');
                                navigate('/harry');
                            }}
                            className={styles.pirateButton}
                        >
                            Harry
                        </Button>
                        <Button className={styles.pirateButton}>Rascal</Button>
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
