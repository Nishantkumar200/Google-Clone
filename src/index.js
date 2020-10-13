import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer,{initialState} from './reducer';
// Because we are importing const that's why we are using {} braces
import {StateProvider} from './StateProvider';



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState ={initialState} reducer = {reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
