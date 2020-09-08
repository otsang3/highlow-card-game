import React from 'react';
import DeckContextProvider from './contexts/DeckContext';
import GameWindow from './components/GameWindow'
import DiscardPile from './components/DiscardPile';

function App() {
  return (
    <div className="App">
      <DeckContextProvider>
        <GameWindow/>
      </DeckContextProvider>
    </div>
  );
}

export default App;
