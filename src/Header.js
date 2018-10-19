import React from 'react';

import './Header.css';

let Header = (props) => {
    return (<header className="Header">
        <div className="Header-title">Ufufy game</div>
        <div className="Header-message">{props.message && <span style={{ color: '#ff0000' }}>{props.message}</span>}</div>
        <div className="Header-scores">Your score: {props.score} | Top score: {props.topScore}</div>
    </header>)
};

export default Header;