import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import './global.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Sobre from './pages/Sobre';
import reportWebVitals from './reportWebVitals';
import Collaborators from './pages/Collaborators';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Home />
    <Sobre />
    <Services/>
    <Collaborators/>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
