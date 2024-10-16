import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // This should match the file name
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
