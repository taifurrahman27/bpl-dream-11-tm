import React from 'react';

import Card from '../Card/Card';


const AvailablePlayers = ({ players, setCoin, coin }) => {

    return (
        <div className='container mx-auto'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    players.map(player => {
                        return <Card player={player} setCoin={setCoin} coin={coin} />
                    })
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;