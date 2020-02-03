import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Header from './components/header/index';
import './App.scss';
import './styles/media.query.css';


const App = (props) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === null) {
      localStorage.setItem('theme', 'light');
    } else {
      setTheme(currentTheme);
    }
  }, [theme]);

  function changeTheme(){
    let currentTheme = localStorage.getItem('theme');
    
    if(currentTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="app">
          <Header toggleTheme={changeTheme}/>
          <div className="content">
            {props.children}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

