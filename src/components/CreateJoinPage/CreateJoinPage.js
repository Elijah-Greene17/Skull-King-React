import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import Button from '../UI/Button/Button';
import ApplicationInput from '../UI/Input/ApplicationInput';
import MainView from '../UI/MainView/MainView';
import TitleHeader from '../UI/TitleHeader/TitleHeader';
import styles from './CreateJoinPage.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from '../Error/Error';
// import socket from '../../Socket/Socket';

toast.configure();

const CreateJoinPage = () => {
    const { name, gameId, setGameId, error, setError } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <MainView>
            <div className={styles.createJoinPage}>
                <Error message={error} hidden={error.length === 0} />
                <TitleHeader>Ahoy, {name}!</TitleHeader>
                <ApplicationInput
                    value={gameId}
                    onChange={(value) => {
                        setGameId(value.toUpperCase());
                    }}
                    case="upper"
                    maxLength={4}
                >
                    Enter a Server Code
                </ApplicationInput>
                <div>
                    <Button
                        onClick={() => {
                            fetch(
                                'https://server-skull-king.herokuapp.com/createNewGame',
                                {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        name: name,
                                    }),
                                }
                            )
                                .then((res) => {
                                    if (res.ok) {
                                        return res.json();
                                    } else {
                                        console.log('Error creating game');
                                    }
                                })
                                .then((data) => {
                                    console.log('EG Data: ', data.id);
                                    setGameId(data.id);
                                    setError('');
                                    navigate('/lobby');
                                });
                        }}
                    >
                        CREATE GAME
                    </Button>
                    <Button
                        onClick={() => {
                            fetch(
                                `https://server-skull-king.herokuapp.com/idExists/${gameId}`
                            )
                                .then((res) => {
                                    if (res.ok) {
                                        return res.json();
                                    } else {
                                        setError('Could not find server code');
                                    }
                                })
                                .then((data) => {
                                    console.log(data.idExists);
                                    if (data.idExists) {
                                        setError('');
                                        navigate('/lobby');
                                    } else {
                                        setError('Could not find server code');
                                    }
                                });
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
