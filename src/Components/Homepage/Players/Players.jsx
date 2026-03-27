import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise);

    const [selectedType, setSelectedType] = useState("available");



    return (
        <div className='container mx-auto'>

            <div className='flex justify-between items-center my-10'>
                {selectedType === "available" ? <h2 className='text-4xl font-bold'>Available Players</h2> : <h2 className='text-4xl font-bold'>Selected Players (1/20)</h2>
                }
                <div className='flex justify-between items-center'>
                    <button onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available" ? " bg-[#E7FE29] text-black" : ""} rounded-l-3xl`}>
                        Available
                    </button>
                    <button onClick={() => setSelectedType("selected")} className={`btn ${selectedType === "selected" ? " bg-[#E7FE29] text-black" : ""} rounded-r-3xl`}>
                        Selected (0)
                    </button>
                </div>
            </div>

            {selectedType === "available" ?
                (<AvailablePlayers players={players} setCoin={setCoin} coin={coin} />) : (<SelectedPlayers />)}

        </div>
    );
};

export default Players;