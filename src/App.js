//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import Shop from './pages/Shop';
import About from './pages/About';
import Services from './pages/Services';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Pricing from './pages/Pricing';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reminder from './pages/Reminder';
import SendEvidence from './pages/SendEvidence';
import PassMissmatch from './pages/PassMissmatch';
import GiveMissmatch from './pages/GiveMissmatch';
import Congrats from './pages/Congrats';

const App = () => {
  return (
    <div>

      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePag />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
          <Route path='/edit/:id' element={<EditPage />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/reminder' element={<Reminder />}></Route>
          <Route path='/evidence' element={<SendEvidence />}></Route>
          <Route path='/passmissmatch' element={<PassMissmatch />}></Route>
          <Route path='/givemissmatch' element={<GiveMissmatch />}></Route>
          <Route path='/congrats' element={<Congrats />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
