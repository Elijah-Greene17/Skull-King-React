import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import CreateJoinPage from './components/CreateJoinPage/CreateJoinPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './Contexts/AppContext';
import { toast } from 'react-toastify';
import BidPage from './components/BidPage/BidPage';
import ScorecardPage from './components/ScorecardPage/ScorecardPage';

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

    const showError = (text) => {
        toast.error(text, {
            position: 'bottom-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark',
            icon: false,
        });
    };

    return (
        <AppContext.Provider
            value={{
                id,
                setId,
                name,
                setName,
                host,
                setHost,
                showError,
                gameId,
                setGameId,
                playerList,
                setPlayerList,
                currentRound,
                setCurrentRound,
                scoreboard,
                setScoreboard,
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/createjoin" element={<CreateJoinPage />} />
                    <Route path="/lobby" element={<GameLobbyPage />} />
                    <Route path="/bid" element={<BidPage />} />
                    <Route path="/scorecard" element={<ScorecardPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
