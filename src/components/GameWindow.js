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
                    <h2>Current score: {state.userScore}</h2>
                    <div className="center-container">
                        <CardRender card={state.currentCard}/>
                    </div>
                    
                </div>
                <div className="game-col">
                    <button style={{marginTop: "3em"}} onClick={() => playGame("HIGHER")}>HIGHER</button>
                    <button onClick={() => playGame("LOWER")}>LOWER</button>
                </div>
            </div>  
        )
    }

    const renderResult = () => {
        return(
            <div className="game-container">
                <div className="game-col">
                    <h2>Unlucky!</h2>
                    <CardRender card={state.currentCard}/>
                    <h3>Your Score: {state.userScore}</h3>
                    <div className="center-container">
                        <button onClick={() => resetGame()}>Play Again</button>
                    </div>
                </div>
                
                
            </div>
        )
    }

    return(
        <div>
            {state.gameOver ? renderResult() : renderGame()}
            <div className="discard-col">
                <DiscardPile cards={state.discardPile}/>
            </div>
            
        </div>
    )
}

export default GameWindow;