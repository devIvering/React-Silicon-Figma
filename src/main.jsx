import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/layout.min.css';

import Header from './views/sections/Header';
import Home from './views/Home';
import Error from './views/Error';
import Contact from './views/Contact';
import News from './views/News';
import { AppStoreProvider } from './contexts/AppState';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStoreProvider>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      </AppStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)