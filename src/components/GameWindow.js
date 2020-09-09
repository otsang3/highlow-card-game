import React, { useContext } from 'react';
import { DeckContext } from '../contexts/DeckContext';
import CardRender from './CardRender';
import DiscardPile from './DiscardPile';

function GameWindow() {

    const deckContext = useContext(DeckContext);

    const { state, playGame, resetGame } = deckContext;

    const renderGame = () => {
        return(
            <div>
                <p>Current score: {state.userScore}</p>
                <CardRender card={state.currentCard}/>
                <button onClick={() => playGame("HIGHER")}>HIGHER</button>
                <button onClick={() => playGame("LOWER")}>LOWER</button>
            </div>  
        )
    }

    const renderResult = () => {
        return(
            <div>
                <p>Unlucky!</p>
                <CardRender card={state.currentCard}/>
                <p>Your score: {state.userScore}</p>
                <button onClick={() => resetGame()}>Play Again</button>
            </div>
        )
    }

    return(
        <div>
            {state.gameOver ? renderResult() : renderGame()}
            <DiscardPile cards={state.discardPile}/>
        </div>
    )
}

export default GameWindow;