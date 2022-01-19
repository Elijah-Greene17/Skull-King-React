import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Skull King</h1>
            <Link to="/createjoin"> Go </Link>
            <button onClick={() => {navigate("/createjoin")}}> about </button>
        </div>
    )
}

export default HomePage;