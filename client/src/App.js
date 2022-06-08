import React from 'react';

import Header from './components/appLevel/Header/Header';
import SideBar from './components/appLevel/SideBar/SideBar';
import Dashboard from './components/appLevel/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="app-holder">
          <SideBar />
          <Dashboard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
