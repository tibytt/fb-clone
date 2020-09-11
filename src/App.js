import React from 'react';

import './App.css';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

import { useStateValue } from "./StateProvider";

function App() {
  const [state, dispatch] = useStateValue();

  return (
    // BEM naming convention para las clases
    <div className="app">
      { !state? (
      <Login /> 
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    
    </div>
  );
}

export default App;
