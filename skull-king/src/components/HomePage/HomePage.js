import { useNavigate } from 'react-router-dom';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import ApplicationInput from '../UI/Input/ApplicationInput';
import Button from '../UI/Button/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate('/createjoin');
    };

    return (
        <MainView>
            <div className={styles.homePage}>
                <TitleHeader>Skull King</TitleHeader>
                <ApplicationInput>Enter your name</ApplicationInput>
                <Button onClick={handlePlay}>PLAY</Button>
            </div>
        </MainView>
    );
};

export default HomePage;
