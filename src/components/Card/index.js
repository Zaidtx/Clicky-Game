import React from 'react';


const Card = props => {
    return (
        <div>
            <img src={props.image} onClick={() =>props.handleClick(props.id)} style={{width: "250px", heigh: "250px"}}></img>
            
        </div>
    );
};


export default Card;