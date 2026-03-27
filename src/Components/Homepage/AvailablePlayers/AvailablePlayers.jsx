import React from 'react';

import Card from '../Card/Card';


const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {

    return (
        <div className='container mx-auto'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    players.map(player => {
                        return <Card key={player.playerName} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                    })
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;