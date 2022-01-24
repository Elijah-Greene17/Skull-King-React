import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './CreateJoinPage.module.css';

const CreateJoinPage = () => {
    return (
        <MainView>
            <div className={styles.createJoinPage}>
                <TitleHeader>Ahoy, Matey!</TitleHeader>
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
