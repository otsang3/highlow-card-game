import React, { createContext, useState } from 'react';
import {deck} from '../apis/Deck';

export const DeckContext = createContext();

function DeckContextProvider(props) {

    const initialState = {
        deck: deck,
        discardPile: [],
        currentCard: deck[0],
        nextCard: deck[1],
        userScore: 0
    }

    const [state, setState] = useState(initialState)

    return(
        <DeckContext.Provider value={{
            state: state
        }}>
            {props.children}
        </DeckContext.Provider>
    )
}

export default DeckContextProvider;

