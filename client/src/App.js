import './resources/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import AccountPage from './pages/account';
import RootPage from './pages/rootPage';
import AboutUsPage from './pages/aboutUs';

import { Toaster } from 'react-hot-toast'
import SearchPage from './pages/search/search';
import VerifiedMail from './pages/verifiedMail';
import SendVerifyMail from './pages/sendVerifyMail';
import Searchv2 from './pages/searchv2';
import TravelsPage from './pages/travels';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RootPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/confirm/:token' element={<VerifiedMail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/travels' element={<TravelsPage />} />
        <Route path='/search2' element={<Searchv2 />} />
        <Route path='/aboutUs' element={<AboutUsPage />} />
        <Route path='/sendVerify' element={<SendVerifyMail />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Router>
  );
}

export default App;
