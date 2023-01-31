import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { MainRouters } from './Pages/MainRouters/MainRouters';
import { RoutesData } from './Pages/Routes/Routes';
import { MainRouters } from './Pages/MainRouters/MainRouters';

function App() {
  return (
    <div>
     <MainRouters array={RoutesData}/>
    </div>
  );
}

export default App;
