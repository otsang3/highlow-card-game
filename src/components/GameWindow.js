import React, { useContext } from 'react';
import { DeckContext } from '../contexts/DeckContext';
import CardRender from './CardRender'

function GameWindow() {

    const deckContext = useContext(DeckContext);

    const { state } = deckContext;

    return(
        <div>
            <CardRender card={state.currentCard}/>
        </div>
        
    )
}

export default GameWindow;