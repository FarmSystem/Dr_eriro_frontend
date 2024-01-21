import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReservationlistPage.css'; // 스타일 파일을 불러옵니다.

const linkStyle = {
  textDecoration: 'none', // 밑줄 없애기
  fontWeight: 'bold',
  color: 'black', // 텍스트 색상을 원하는 색으로 설정
  fontSize: '35px',
};

const ReservationlistPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // 예시 데이터를 사용
    const exampleData = [
      {
        doctorName: 'Dr. Smith',
        hospitalName: 'City Hospital',
        appointmentDate: '2022-01-01',
        medicalSubject: 'Cardiology',
        doctorImage: '/doctor1.jpeg',
      },
      {
        doctorName: 'Dr. Johnson',
        hospitalName: 'Community Clinic',
        appointmentDate: '2022-02-15',
        medicalSubject: 'Dermatology',
        doctorImage: '/doctor2.jpeg',
      },
      // ... 다른 예시 데이터
    ];

    setReservations(exampleData);
  }, []);

  return (
    <div>
      <h1>예약 내역</h1>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index} className="reservation-item">
            <div className="doctor-image">
              <img src={reservation.doctorImage} alt={reservation.doctorName} />
            </div>
            <div className="info-container">
              <div className="doctor-info">
                <Link to={`/reservationlist/detail`} style={linkStyle}>
                  <h3>{reservation.doctorName}</h3> </Link>
                <span className="hospital-name">{reservation.hospitalName}</span>
              </div>
              <div className="appointment-info">
                <span className="date">예약날짜: {reservation.appointmentDate}</span>
                <br></br>
                <span className="subject">진료 과목: {reservation.medicalSubject}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationlistPage;
