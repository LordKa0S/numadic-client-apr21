import { Link } from "react-router-dom";

import './home.css';

const Home = (): JSX.Element => {
    return (
        <div className="centered">
            <Link to="/place-interactions"><h1>Place Interactions</h1></Link>
            <Link to="/vehicle-activity"><h1>Vehicle Activity</h1></Link>
        </div>
    );
}

export default Home;