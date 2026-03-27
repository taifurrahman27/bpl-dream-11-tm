import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from 'react-icons/fa6';

const Card = ({ player, setCoin, coin }) => {

    const [isSelected, setIsSelected] = useState(false);
    const handleChoosePlayer = () => {
        setIsSelected(true);
        setCoin(coin - parseInt(player.price));
    }

    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img className='max-auto max-w-80'
                        src={player.playerImg}
                        alt={player.playerName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> <FaUserAlt />{player.playerName}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center gap-2'>
                            <FaFlag />
                            <p>{player.playerCountry
                            }</p>
                        </div>

                        <button className='btn btn-ghost'>{player.playerType}</button>
                    </div>

                    <div className="divider"></div>

                    <h2 className='font-bold'>Rating ({player.rating})</h2>
                    <div className='flex justify-end items-center'>
                        <p>{player.battingStyle}</p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>
                    <div className='card-actions flex justify-between items-center'>
                        <p className='font-semibold'>Price: {player.price}</p>
                        <button
                            onClick={handleChoosePlayer}
                            disabled={isSelected ? true : false} className='btn'>{isSelected === true ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;