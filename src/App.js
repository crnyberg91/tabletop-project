import React from 'react';
// import NavBar from './features/NavBar/navBar';
// import MainContentBox from './features/MainContentBox/mainContentBox';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ClassPage } from './features/ClassPage/classPage';
import { SelectedClassPage } from './features/SelectedClassPage/selectedClassPage';
import { FinalClassPage } from './features/FinalClassPage/finalClassPage';
import { ResultPage } from './features/ResultPage/resultPage';

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' component={MainContentBox}/> */}
        <Route exact path='/' component={ClassPage} />
        <Route path='/selectedClass' component={SelectedClassPage} />
        <Route path='/finalClass' component={FinalClassPage} />
        <Route path='/resultPage' component={ResultPage} />
      </Routes>
    </Router>
  );
}

export default App;