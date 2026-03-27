import React from 'react';
import Players from '../Homepage/Players/Players';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayers, setSelectedPlayers);
    const handleDeletePlayer = (player) => {
        // console.log(selectedPlayers, "selectedplayer");
        const filteredPlayer = selectedPlayers.filter(selectedplayer => selectedplayer.playerName !== player.playerName);
        // console.log(filteredPlayer, "filtered");

        setSelectedPlayers(filteredPlayer);
        setCoin(coin + parseInt(player.price));
    }

    return (
        <div>
            {
                selectedPlayers.map((player, index) => {
                    return <div className='my-3'>
                        <div key={index} className='flex justify-between items-center gap-5 p-6 border rounded-2xl'>
                            <div className='flex justify-between items-center gap-4'>
                                <img className='max-h-15 w-auto rounded-xl' src={player.playerImg} alt="" />

                                <div>
                                    <h2 className='text-2xl font-semibold flex gap-2 justify-between items-center'>
                                        <FaUserAlt />{player.playerName}</h2>
                                    <p>{player.playerType}</p>
                                </div>

                            </div>
                            <button className='btn text-red-600' onClick={() => handleDeletePlayer(player)}>
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default SelectedPlayers;