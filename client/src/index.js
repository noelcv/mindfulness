import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import Header from './components/appLevel/Header/Header';
import SideBar from './components/appLevel/SideBar/SideBar';
import Dashboard from './components/appLevel/Dashboard/Dashboard';
import ProfileCard from './components/appLevel/ProfileCard/ProfileCard';
import ClassBoard from './components/Classroom/ClassBoard/ClassBoard';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ClassroomPage from './components/pages/ClassroomPage';
import EventsPage from './components/pages/EventsPage';
import ProfilePage from './components/pages/ProfilePage';
import SettingsPage from './components/pages/SettingsPage';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/events' element={<EventsPage />}/>
          <Route path='/classroom' element={<ClassroomPage />}/>
          <Route path='/settings' element={<SettingsPage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
