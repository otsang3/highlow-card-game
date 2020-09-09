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
                currentCard: prevState.deck[0],
                nextCard: deck[1],
                userScore: prevState.userScore += 1
            }
        })
    }

    const discardCard = () => {
        const deckSize = deck.length;
        setState(prevState => {
            return {
                ...prevState,
                currentCard: prevState.deck[1],
                deck: prevState.deck.slice(1, deckSize),
                discardPile: [prevState.currentCard, ...prevState.discardPile],
                nextCard: prevState.deck[2]
            }
        })
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
            addPoint();
            discardCard();
        } else if (state.currentCard.value > state.nextCard.value && string === "LOWER") {
            addPoint();
            discardCard();
        } else if (state.currentCard.value < state.nextCard.value && string === "HIGHER") {
            addPoint();
            discardCard();
        } else {
            discardCard();
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

