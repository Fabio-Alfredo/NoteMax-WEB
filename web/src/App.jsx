import './App.css'
import InApp from './page/InApp/InApp';
import Login from './page/Login/Login';
import Registrer from './page/Register/Register';
import { useEffect, useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };


  return (

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            authenticated ? (
              <Navigate to="/principal" />
            ) : (
              <Login onLogin={() => setAuthenticated(true)} />
            )
          }
        />
        <Route
          path="/principal"
          element={
            authenticated ? (
              <InApp onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path='/registrer' element={<Registrer />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  )
}

export default App;
