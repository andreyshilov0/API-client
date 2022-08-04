import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import NavBar from './components/NavBar';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import { BrowserRouter } from 'react-router-dom';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
      <NavBar />
      <App />
    </Context.Provider>
  </BrowserRouter>,
);
