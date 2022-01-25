import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import ApplicationInput from '../UI/Input/ApplicationInput';
import Button from '../UI/Button/Button';
import styles from './HomePage.module.css';
import { AppContext } from '../../Contexts/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const HomePage = () => {
    const navigate = useNavigate();
    const { name, setName } = useContext(AppContext);

    const handleOnChange = (text) => {
        setName(text);
    };

    const handlePlay = () => {
        if (name.length > 0) {
            navigate('/createjoin');
        } else {
            toast.error('Please enter a name', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
    };

    return (
        <MainView>
            <div className={styles.homePage}>
                <TitleHeader>Skull King</TitleHeader>
                <ApplicationInput onChange={handleOnChange}>
                    Enter your name
                </ApplicationInput>
                <Button onClick={handlePlay}>PLAY</Button>
            </div>
        </MainView>
    );
};

export default HomePage;
