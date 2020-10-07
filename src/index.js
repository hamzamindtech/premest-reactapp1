import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import FifthComponent from './FifthComponent';
import SixthComponent from './SixthComponent';
import SeventhComponent from './SeventhComponent';
import EightComponent from './EightComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
    <FourthComponent />
    <FifthComponent />
    <SixthComponent />
    <SeventhComponent />
    <EightComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
