import React from 'react';
import dollarImg from "../../assets/dollar_1.png"


const Navber = ({ coin }) => {
    return (
        <div className="container mx-auto navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="flex justify-between items-center font-bold text-xl gap-2">
                    {coin} Virtual Coins
                    <img src={dollarImg} alt="coins" />
                </button>
            </div>
        </div>
    );
};

export default Navber;