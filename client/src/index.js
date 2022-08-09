import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ClassroomPage from './components/pages/ClassroomPage';
import EventsPage from './components/pages/EventsPage';
import ProfilePage from './components/pages/ProfilePage';
import LandingPage from './components/pages/LandingPage';
import SettingsPage from './components/pages/SettingsPage';
import SignInPage from './components/pages/SignInPage';
import { AuthContextProvider } from './AuthContext/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/signin' element={<SignInPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/events' element={<EventsPage />}/>
          <Route path='/classroom' element={<ClassroomPage />}/>
          <Route path='/classroom/:location' element={<ClassroomPage />}/>
          <Route path='/settings' element={<SettingsPage />}/>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
