import React from 'react';

function CardRender(props) {

    return(
        <img src={props.card.imgURL} alt="card"/>
    )
}

export default CardRender;