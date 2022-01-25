import { useContext } from 'react';
import { AppContext } from '../../Contexts/AppContext';
import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './CreateJoinPage.module.css';

const CreateJoinPage = () => {
    const { name } = useContext(AppContext);

    return (
        <MainView>
            <div className={styles.createJoinPage}>
                <TitleHeader>Ahoy, {name}!</TitleHeader>
                <ApplicationInput>Enter a Server Code</ApplicationInput>
                <div>
                    <Button>CREATE GAME</Button>
                    <Button>JOIN GAME</Button>
                </div>
            </div>
        </MainView>
    );
};

export default CreateJoinPage;
