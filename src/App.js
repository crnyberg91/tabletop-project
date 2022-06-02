import React from 'react';
import NavBar from './features/NavBar/navBar';
import MainContentBox from './features/MainContentBox/mainContentBox';

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <NavBar/>
      <MainContentBox/>
      <footer>
      </footer>
    </div>
  );
}

export default App;