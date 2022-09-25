import './resources/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import AccountPage from './pages/account';
import RootPage from './pages/rootPage';
import HomePage from './pages/home';

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RootPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/aboutUs' element={<HomePage />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Router>
  );
}

export default App;
