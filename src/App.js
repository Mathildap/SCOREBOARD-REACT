import React from 'react';
import Score from './components/Score';
import { useState } from 'react';
import NewPlayer from './components/NewPlayer';
import ScoreBoard from './components/ScoreBoard';
import Header from './components/Header';

function App() {
    const [players, setPlayers] = useState([
        {
            id: 1,
            userName: 'Mathilda',
            score: 0,
        },
        {
            id: 2,
            userName: 'Kimmie',
            score: 0,
        },
        {
            id: 3,
            userName: 'Robin',
            score: 0,
        },
    ]);

    // ADD SCORE
    const incScore = (id) => {
        console.log('add: ', id);
        setPlayers(
            players.filter((player) =>
                player.id === id ? { ...player, score: player.score++ } : player
            )
        );
    };

    // REDUCE SCORE
    const redScore = (id) => {
        console.log('red: ', id);
        setPlayers(
            players.filter((player) =>
                player.id === id ? { ...player, score: player.score-- } : player
            )
        );
    };

    // ADD PLAYER
    const addPlayer = (player) => {
        const userName = player.name;
        const id = Math.floor(Math.random() * 10000) + 1;
        const score = 0;
        const newPlayer = { id, userName, score };
        setPlayers([...players, newPlayer]);
    };

    // DELETE PLAYER
    const deletePlayer = (id) => {
        setPlayers(players.filter((player) => player.id !== id));
    };

    return (
        <>
            <Header />
            <div className='score-board'>
                <ScoreBoard />
                <div className='players-container'>
                    <Score
                        players={players}
                        onAdd={incScore}
                        onReduce={redScore}
                        onDelete={deletePlayer}
                    />
                </div>
            </div>
            <NewPlayer onAddPlayer={addPlayer} />
        </>
    );
}

export default App;
