import React from 'react';
import dollarImg from "../../assets/dollar_1.png"


const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center font-bold text-xl gap-2">
                        0 Virtual Coins
                        <img src={dollarImg} alt="coins" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navber;