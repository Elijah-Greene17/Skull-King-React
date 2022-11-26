import { useEffect, useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import CreateJoinPage from './components/CreateJoinPage/CreateJoinPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import LeaderBoardPage from './components/LeaderBoardPage/LeaderBoardPage';
import CalculateScorePage from './components/CalculateScorePage/CalculateScorePage';
import GameOverPage from './components/GameOverPage/GameOverPage';
import HarryPage from './components/HarryPage/HarryPage';
import RascalPage from './components/RascalPage/RascalPage';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './Contexts/AppContext';
import BidPage from './components/BidPage/BidPage';
import ScorecardPage from './components/ScorecardPage/ScorecardPage';
import socket from './Socket/Socket';

function App() {
    /* Variables:

        userName
        userId
        
    */
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [host, setHost] = useState('');
    const [gameId, setGameId] = useState('');
    const [playerList, setPlayerList] = useState([]);
    const [currentRound, setCurrentRound] = useState(0);
    const [scoreboard, setScoreboard] = useState({});
    const [winner, setWinner] = useState({});
    const [error, setError] = useState('');
    const [harryToggle, setHarryToggle] = useState(true);
    const [rascalToggle, setRascalToggle] = useState(true);

    useEffect(() => {
        console.log("APP USE EFFECT")

        if (localStorage.getItem('skName')) {
            setName(localStorage.getItem('skName'))
        }

        if (localStorage.getItem('skGameId')) {
            setGameId(localStorage.getItem('skGameId'))

            fetch(
                `https://server-skull-king.herokuapp.com/admin/getSessionInfo/${localStorage.getItem('skGameId')}`
            )
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        setError('Error 5');
                    }
                })
                .then((data) => {
                    if (data) {
                        console.log("PLEASE:")
                        // if (!data.isOpen) {
                        //     let gameData = {
                        //         name: localStorage.getItem('skName'),
                        //         gameId: localStorage.getItem('skGameId'),
                        //         override: true

                        //     }
                        //     socket.emit('joinGame', gameData)
                        // }

                        setScoreboard(data.scoreboard)
                        console.log("HMMMM: ", data)
                        setPlayerList(data.players)
                        socket.emit('joinRoom', localStorage.getItem('skGameId'))

                    }
                });
        }

        if (localStorage.getItem('skPlayerId')) {
            setId(localStorage.getItem('skPlayerId'))
        }
        if (localStorage.getItem('skHost')) {
            setHost(localStorage.getItem('skHost'))
        }
        if (localStorage.getItem('skCurrentRound')) {
            setCurrentRound(localStorage.getItem('skCurrentRound'))
        }
        if (localStorage.getItem('skWinner')) {
            setWinner(localStorage.getItem('skWinner'))
        }
        if (localStorage.getItem('skHarryToggle')) {
            setHarryToggle(localStorage.getItem('skHarryToggle'))
        }
        if (localStorage.getItem('skRascalToggle')) {
            setRascalToggle(localStorage.getItem('skRascalToggle'))
        }


    }, [])

    return (
        <AppContext.Provider
            value={{
                id,
                setId,
                name,
                setName,
                host,
                setHost,
                gameId,
                setGameId,
                playerList,
                setPlayerList,
                currentRound,
                setCurrentRound,
                scoreboard,
                setScoreboard,
                winner,
                setWinner,
                error,
                setError,
                harryToggle,
                setHarryToggle,
                rascalToggle,
                setRascalToggle,
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/createjoin" element={<CreateJoinPage />} />
                    <Route path="/lobby" element={gameId ? <GameLobbyPage /> : <HomePage />} />
                    <Route path="/leaderboard" element={gameId ? <LeaderBoardPage /> : <HomePage />} />
                    <Route path="/bid" element={gameId ? <BidPage /> : <HomePage />} />
                    <Route path="/scorecard" element={gameId ? <ScorecardPage /> : <HomePage />} />
                    <Route path="/harry" element={gameId ? <HarryPage /> : <HomePage />} />
                    <Route path="/rascal" element={gameId ? <RascalPage /> : <HomePage />} />
                    <Route
                        path="/calculatescore"
                        element={gameId ? <CalculateScorePage /> : <HomePage />}
                    />
                    <Route path="/gameover" element={gameId ? <GameOverPage /> : <HomePage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
