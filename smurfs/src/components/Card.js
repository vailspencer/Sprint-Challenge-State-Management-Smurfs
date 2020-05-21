import React from 'react';


const Card = props => {
    return(
        <div className ='cardBody'>
            <h3 className ='titleCard'>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
};

export default Card;