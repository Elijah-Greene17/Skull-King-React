import { useContext, useState } from 'react';
import { AppContext } from '../../Contexts/AppContext';
import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './CreateJoinPage.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import socket from '../../Socket/Socket';

toast.configure();

const CreateJoinPage = () => {
    const { name, showError } = useContext(AppContext);

    const gameId = 'A1B2';

    // const ping = (msg) => {
    //     socket.emit('pingSocket', msg);
    // };

    return (
        <MainView>
            <div className={styles.createJoinPage}>
                <TitleHeader>Ahoy, {name}!</TitleHeader>
                <ApplicationInput>Enter a Server Code</ApplicationInput>
                <div>
                    <Button onClick={() => {}}>CREATE GAME</Button>
                    <Button
                        onClick={() => {
                            fetch(`http://localhost:3001/idExists${gameId}`)
                                .then((res) => {
                                    if (res.ok) {
                                        console.log('ID exists!');
                                        res.json();
                                    } else {
                                        showError('This Id does not exist');
                                    }
                                })
                                .then((data) => console.log(data));
                        }}
                    >
                        JOIN GAME
                    </Button>
                </div>
            </div>
        </MainView>
    );
};

export default CreateJoinPage;
