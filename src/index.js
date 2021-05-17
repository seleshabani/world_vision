import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyles from './theme/GlobalStyle';
// import { ThemeContext} from 'styled-components';
// import {ThemeConfig} from './theme/Theme'

ReactDOM.render(
    <>
    <GlobalStyles/>
    {/* <ThemeContext theme={ThemeConfig}> */}
      <App />
    {/* </ThemeContext> */}
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
