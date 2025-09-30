import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary'; // optional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </ErrorBoundary>
  </React.StrictMode>
);
