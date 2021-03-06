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
// import socket from '../../Socket/Socket';

toast.configure();

const CreateJoinPage = () => {
    const { name, gameId, setGameId, showError } = useContext(AppContext);
    const navigate = useNavigate();

    //const [gameId, setGameId] = useState('');

    // const ping = (msg) => {
    //     socket.emit('pingSocket', msg);
    // };

    return (
        <MainView>
            <div className={styles.createJoinPage}>
                <TitleHeader>Ahoy, {name}!</TitleHeader>
                <ApplicationInput
                    onChange={(value) => {
                        setGameId(value);
                    }}
                >
                    Enter a Server Code
                </ApplicationInput>
                <div>
                    <Button
                        onClick={() => {
                            fetch('http://localhost:3001/createNewGame', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    name: name,
                                }),
                            })
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
                                    navigate('/lobby');
                                });
                        }}
                    >
                        CREATE GAME
                    </Button>
                    <Button
                        onClick={() => {
                            fetch(`http://localhost:3001/idExists/${gameId}`)
                                .then((res) => {
                                    if (res.ok) {
                                        return res.json();
                                    } else {
                                        console.log(
                                            'Error searching for game Id'
                                        );
                                    }
                                })
                                .then((data) => {
                                    console.log(data.idExists);
                                    if (data.idExists) {
                                        navigate('/lobby');
                                    } else {
                                        console.log('ID does not exist');
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
