import React from 'react';
import "./style.css"

const Navbar = props => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">Clicky Game</a>
                    </li>
                    <li>
                        Score: {props.score} | Top Score: {props.topScore}
                    </li>

                </ul>
            </nav>
            
        </div>
    );
};



export default Navbar;