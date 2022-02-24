import MainView from '../UI/MainView/MainView';
import Scorecard from './Scorecard';
import styles from './ScorecardPage.module.css';

const ScorecardPage = () => {
    return (
        <MainView>
            <div className={styles.scorecardPage}>
                <Scorecard />
            </div>
        </MainView>
    );
};

export default ScorecardPage;
