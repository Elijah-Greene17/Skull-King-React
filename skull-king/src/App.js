import HomePage from "./components/HomePage/HomePage";
import CreateJoinPage from "./components/CreateJoinPage/CreateJoinPage"
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/createjoin" element={<CreateJoinPage />}/>
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="*" element={< ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;