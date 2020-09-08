import React, { createContext, useState } from 'react';
import {deck} from '../apis/Deck';

export const DeckContext = createContext();

function DeckContextProvider(props) {

    const initialState = {
        deck: deck,
        discardPile: [],
        currentCard: null,
        nextCard: null,
        userScore: 0
    }

    const [state, setState] = useState(initialState)

    return(
        <DeckContext.Provider>
            {props.children}
        </DeckContext.Provider>
    )
}

export default DeckContextProvider;

