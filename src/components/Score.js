import Player from './Player';

const Score = ({ players, onAdd, onReduce, onDelete }) => {
    console.log(players);
    return (
        <>
            {players
                .sort((a, b) => (a.score < b.score ? 1 : -1))
                .map((player) => (
                    <Player
                        key={player.id}
                        player={player}
                        onAdd={onAdd}
                        onReduce={onReduce}
                        onDelete={onDelete}
                    />
                ))}
        </>
    );
};

export default Score;
