import './App.css';
import LoginPage from './components/login';
import MainPage from './components/main';
import NavBar from './components/nav';
import { useState, useEffect } from 'react';

function App() {
  let [userAuth, setUserAuth] = useState(false);

  let checkToken = () => {
    let token = localStorage.getItem('token');
    if (token) return token;
    return;
  };

  useEffect(() => {
    const initLoad = () => {
      let token = checkToken();
      if (token) setUserAuth(true);
    };
    initLoad();
  }, [userAuth]);

  return (
    <div className="App">
      <NavBar setUserAuth={setUserAuth} />
      {userAuth ? <MainPage /> : <LoginPage setUserAuth={setUserAuth} />}
    </div>
  );
}

export default App;
