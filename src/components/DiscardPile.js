import React from 'react';
import CardRender from './CardRender';

function DiscardPile(props) {

    const renderDiscards = () => {
        return props.cards.map(card => {
            return(
                <CardRender card={card}/>
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