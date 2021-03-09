import React from 'react'
import GameDashboard from './pages/GameDashboard/index';
import {GameProvider} from './context/GameContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <GameProvider>
            <GameDashboard></GameDashboard>
        </GameProvider>
    );
};

export default App;
