import React, { useContext } from 'react';
import { DeckContext } from '../contexts/DeckContext';
import CardRender from './CardRender'

function GameWindow() {

    const deckContext = useContext(DeckContext);

    const { state } = deckContext;

    return(
        <div>
            <CardRender card={state.currentCard}/>
            <button>HIGHER</button>
            <button>LOWER</button>
        </div>
        
    )
}

export default GameWindow;