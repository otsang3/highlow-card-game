import React, { useContext } from 'react';
import { DeckContext } from '../contexts/DeckContext';
import CardRender from './CardRender';
import DiscardPile from './DiscardPile';

function GameWindow() {

    const deckContext = useContext(DeckContext);

    const { state, playGame, resetGame } = deckContext;

    const renderGame = () => {
        return(
            <div className="game-container">
                <div className="game-col">
                    <h2 style={{textAlign: "center"}}>Current score: {state.userScore}</h2>
                    <CardRender card={state.currentCard}/>
                </div>
                <div className="game-col">
                    <button onClick={() => playGame("HIGHER")}>HIGHER</button>
                    <button onClick={() => playGame("LOWER")}>LOWER</button>
                </div>
                
            </div>  
        )
    }

    const renderResult = () => {
        return(
            <div className="game-container">
                <div className="game-col">
                    <h2 style={{textAlign: "center"}}>Unlucky!</h2>
                    <CardRender card={state.currentCard}/>
                    <h3 style={{textAlign: "center"}}>Your score: {state.userScore}</h3>
                    <button onClick={() => resetGame()}>Play Again</button>
                </div>
                
                
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