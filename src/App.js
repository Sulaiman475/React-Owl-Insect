// App.js
import React from 'react';
import Navbar from './components/Navbar.jsx'
import Board from './components/Board.jsx';
import MyState from './context/myState.js';

const App = () => {

  return (
    <>
      <MyState>
        <Navbar />
        <Board />
      </MyState>
    </>
  );
};

export default App;
