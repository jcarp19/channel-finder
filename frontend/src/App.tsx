import React from 'react';
import './App.css';
import Header from "./components/Header";
import AllChannels from './routes/allChannels';

function App() {
  return (
    <div className="App">
      <Header />
      <AllChannels />
    </div>
  );
}

export default App;
