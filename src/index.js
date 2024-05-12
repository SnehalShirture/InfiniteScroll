import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InfiniteScroll from './Components/InfiniteScroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <InfiniteScroll/>
  </StrictMode>
);


