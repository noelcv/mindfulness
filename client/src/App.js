import Header from './components/appLevel/Header/Header';
import SideBar from './components/appLevel/SideBar/SideBar';
import Dashboard from './components/appLevel/Dashboard/Dashboard';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="app-holder">
      <SideBar/>
      <Dashboard/>
    </div>
    </div>
  );
}

export default App;
