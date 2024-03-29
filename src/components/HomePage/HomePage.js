import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import ApplicationInput from '../UI/Input/ApplicationInput';
import Button from '../UI/Button/Button';
import styles from './HomePage.module.css';
import { AppContext } from '../../Contexts/AppContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from '../Error/Error';

toast.configure();

const HomePage = () => {
    const { name, setName, error, setError } = useContext(AppContext);
    const navigate = useNavigate();

    const handlePlay = () => {
        if (name.length > 0) {
            setError('');
            navigate('/createjoin');
        } else {
            setError('Please enter your name');
        }
    };

    return (
        <MainView>
            <div className={styles.homePage}>
                <Error message={error} hidden={error.length === 0} />
                <TitleHeader>Skull King</TitleHeader>
                <ApplicationInput
                    onChange={(value) => {
                        setName(value);
                        localStorage.setItem('skName', value)
                    }}
                    maxLength={20}
                >
                    Enter your name
                </ApplicationInput>
                <Button onClick={handlePlay}>PLAY</Button>
            </div>
        </MainView>
    );
};

export default HomePage;
