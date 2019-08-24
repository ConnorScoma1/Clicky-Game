import React from "react";
import './app.css'

const Header = props => (
    <div className="head">
        <div className="title">{props.children}</div>
        <div className="score">Score: {props.score} Highscore: {props.highscore}</div>
    </div>
);

export default Header