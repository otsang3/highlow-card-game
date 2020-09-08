import React from 'react';
import DeckContextProvider from './contexts/DeckContext';
import DiscardPile from './components/DiscardPile';

function App() {
  return (
    <div className="App">
      <DeckContextProvider>

      </DeckContextProvider>
    </div>
  );
}

export default App;
