import React from 'react';
import './App.css';
import WelcomeMessage from './WellcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

function App() {
  return (
    <AppLayout>
      <AppBar/>
      <WelcomeMessage/>
    </AppLayout>
  );
}

export default App;
