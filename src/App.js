import React from 'react'
import GameDashboard from './pages/GameDashboard/index';
import Login from './pages/login/index';
import {GameProvider} from './context/GameContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <GameProvider>
            <GameDashboard></GameDashboard>
            {/* <Login></Login> */}
        </GameProvider>
    );
};

export default App;
