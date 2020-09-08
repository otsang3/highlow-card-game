import React, { createContext, useState } from 'react';
import {deck} from '../apis/Deck';

export const DeckContext = createContext();

function DeckContextProvider(props) {

    const initialState = {
        currentCard: deck[0],
        deck: deck,
        discardPile: [],
        gameOver: false,
        nextCard: deck[1],
        userScore: 0
    }

    const [state, setState] = useState(initialState)

    const addPoint = () => {
        setState(prevState => {
            return {
                ...prevState,
                userScore: prevState.userScore += 1
            }
        })
    }

    const discardCard = () => {
        const discard = deck.slice(0,1)
        state.discardPile.unshift(discard)
    }

    const gameOver = () => {
        setState(prevState => {
            return {
                ...prevState,
                gameOver: true
            }
        })
    }

    const playGame = (string) => {
        if (state.currentCard.value === state.nextCard.value) {
            discardCard();
        } else if (state.currentCard.value > state.nextCard.value && string === "HIGHER") {
            discardCard();
        } else if (state.currentCard.value < state.nextCard.value && string === "LOWER") {
            discardCard();
        } else {
            gameOver();
        }
    }

    return(
        <DeckContext.Provider value={{
            addPoint: addPoint,
            gameOver: gameOver,
            playGame: playGame,
            state: state  
        }}>
            {props.children}
        </DeckContext.Provider>
    )
}

export default DeckContextProvider;

