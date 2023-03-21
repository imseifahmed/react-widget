import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const widgetDivs = document.querySelectorAll('.react-widget');

widgetDivs.forEach((div) => {
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <App domElement={div} />
    </React.StrictMode>
  );
});
