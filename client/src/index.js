import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import Dashboard from './components/appLevel/Dashboard/Dashboard';
import ProfileCard from './components/appLevel/ProfileCard/ProfileCard';
import ClassBoard from './components/Classroom/ClassBoard/ClassBoard';
import reportWebVitals from './reportWebVitals';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="profile" element={<ProfileCard />} />
          <Route path="events" element={<h2>Events</h2>} />
          <Route path="classroom" element={<ClassBoard />} />
          <Route path="settings" element={<h2>Settings</h2>} />
        </Routes>
        <Outlet />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
