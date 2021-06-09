const Player = ({ player, onAdd, onReduce, onDelete }) => {
    return (
        <div
            className='player-container'
            onDoubleClick={() => onDelete(player.id)}
        >
            <h3>{player.userName}</h3>
            <p>Score: {player.score}</p>
            <div>
                <button className='minus' onClick={() => onReduce(player.id)}>
                    -
                </button>
                <button className='plus' onClick={() => onAdd(player.id)}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Player;
