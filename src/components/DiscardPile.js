import React from 'react';
import CardRender from './CardRender';

function DiscardPile(props) {

    const renderDiscards = () => {
        return props.cards.map((card, index) => {
            return(
                <CardRender card={card} key={index}/>
            )
        })
    }

    return(
        <div>
            {renderDiscards()}
        </div>
    )
}

export default DiscardPile;