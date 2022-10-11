import React from 'react';

import './App.css';
import { useState } from 'react';
import FunctionalContextComponent from './FunctionalContextComponent';


export const ThemeContext = React.createContext()

export default function App(){
  const [darkTheme, setDarkTheme] = useState(true)


function toggleTheme() {
  setDarkTheme(prevDarkTheme => !prevDarkTheme)
}




  return (
    <>
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalContextComponent/>
    </ThemeContext.Provider>
    </>
  );
}

