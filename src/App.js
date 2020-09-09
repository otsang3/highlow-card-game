import React from 'react';
import DeckContextProvider from './contexts/DeckContext';
import GameWindow from './components/GameWindow';

function App() {
  return (
    <div className="app">
      <DeckContextProvider>
        <GameWindow/>
      </DeckContextProvider>
    </div>
  );
}

export default App;
