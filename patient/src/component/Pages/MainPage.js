import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './MainPage.css';

function Main() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const redirectToOtherPage = () => {
    navigate('/reservation'); 
  };

  const ToOtherPage = () => {
    navigate('/login'); 
  };

  return (
    <div className="home">
      <button className='login-button' onClick={ToOtherPage}>로그인하기</button><br />
      <button className='reservation-button' onClick={redirectToOtherPage}>신청하기</button>
      <div className="img-container">
        <img src='./home1.png' alt="이미지 설명" />
      </div>
    </div>
  );
}

export default Main;
