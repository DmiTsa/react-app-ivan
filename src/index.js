import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const text = 'React cool';
// const elem = (
//   <div>
//     <h1>Hello world</h1>
//     <h2>{text}</h2>
//     <input type="text" />
//     <button>1</button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
