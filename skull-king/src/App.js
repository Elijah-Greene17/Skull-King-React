import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import CreateJoinPage from './components/CreateJoinPage/CreateJoinPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './Contexts/AppContext';

function App() {
    /* Variables:

        userName
        userId
        host
        
    */
    const [name, setName] = useState('');
    const [host, setHost] = useState('');

    return (
        <AppContext.Provider value={{ name, setName, host, setHost }}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/createjoin" element={<CreateJoinPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
