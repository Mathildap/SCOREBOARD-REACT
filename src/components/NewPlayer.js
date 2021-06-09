import { useState } from 'react';

const NewPlayer = ({ onAddPlayer }) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Please write a name!');
            return;
        }

        onAddPlayer({ name });
        setName('');
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit'>Add Player</button>
            </form>
            <div>
                <p className='deleteP'>Doubleclick on a player to delete</p>
            </div>
        </>
    );
};

export default NewPlayer;
