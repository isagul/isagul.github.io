import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Header from './components/header/index';
import ScrollButton from 'react-scroll-button'
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

  function changeTheme() {
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
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
          <Header toggleTheme={changeTheme} />
          <div className="content">
            {props.children}
          </div>
        </div>
        <ScrollButton
          targetId="header"
          behavior={'smooth'}
          buttonBackgroundColor={'#CF5050'}
          iconType={'arrow-up'}
          scrollSpeed="0.5s"
          style={{ fontSize: '16px', outline: 'none' }}
        />
      </>
    </ThemeProvider>
  );
}

export default App;

