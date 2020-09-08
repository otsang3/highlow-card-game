import React, { createContext, useState } from 'react';
import {deck} from '../apis/Deck';

export const DeckContext = createContext();

console.log(deck);

function DeckContextProvider(props) {

    const [state, setState] = useState(deck)

    return(
        <DeckContext.Provider>
            {props.children}
        </DeckContext.Provider>
    )
}

export default DeckContextProvider;

