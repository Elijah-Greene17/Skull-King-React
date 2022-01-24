import { Link, useNavigate } from 'react-router-dom';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import Label from '../UI/Label/Label';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <MainView>
            <div className={styles.homePage}>
                <TitleHeader>Skull King</TitleHeader>
                <Label>Enter your name</Label>
                <Input />
                <Button>PLAY</Button>
            </div>
        </MainView>
    );
};

export default HomePage;
