import React from 'react';
import './App.css';
import WelcomeMessage from './WellcomeMessage';
import AppLayout from './AppLayout';

function App() {
  return (
    <AppLayout> 
      <WelcomeMessage/>
    </AppLayout>
  );
}

export default App;
