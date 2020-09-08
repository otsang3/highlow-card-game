import React, { createContext } from 'react';

export const DeckContext = createContext();

function DeckContextProvider(props) {

    return(
        <DeckContext.Provider>
            {props.children}
        </DeckContext.Provider>
    )
}

export default DeckContextProvider;

