import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AskPage from './component/Pages/AskPage';
import ReservationPage from './component/Pages/ReservationPage';
import Search from './component/Pages/Search';
import Searchdetail from './component/Pages/Searchdetail';
import Apply from './component/Pages/Apply';
import ReservationlistPage from './component/Pages/ReservationlistPage';
import TreatmentlistPage from './component/Pages/TreatmentlistPage';
import MainPage from './component/Pages/MainPage';
import Reservationlistdetail from './component/Pages/Reservationlistdetail';
import Treatmentlistdetail from './component/Pages/Treatmentlistdetail';
import Review from './component/Pages/Review';
import Login from './component/Pages/Login';

const titleStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#0077C0',
  fontSize: '40px',
};

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'black',
  fontSize: '20px',
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="menubar">
          <nav>
            <ul>
              <Link to="/" style={titleStyle}>Dr.이리로</Link><br /><br /><br /><br />
              <Link to="/reservation" style={linkStyle}>예약하기</Link><br /><br />
              <Link to="/ask" style={linkStyle}>자주묻는 질문</Link><br /><br />
              <Link to="/reservationlist" style={linkStyle}>예약 내역</Link><br /><br />
              <Link to="/treatmentlist" style={linkStyle}>진료 내역</Link>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/reservation' element={<ReservationPage />} />
            <Route path='/reservation/search' element={<Search />} />
            <Route path='/reservation/search/detail' element={<Searchdetail />} />
            <Route path='/apply' element={<Apply />} />
            <Route path='/ask' element={<AskPage />} />
            <Route path='/reservationlist' element={<ReservationlistPage />} />
            <Route path='/reservationlist/detail' element={<Reservationlistdetail />} />
            <Route path='/treatmentlist' element={<TreatmentlistPage />} />
            <Route path='/treatmentlist/detail' element={<Treatmentlistdetail />} />
            <Route path='/review' element={<Review />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
