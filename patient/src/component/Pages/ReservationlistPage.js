import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReservationlistPage.css';

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'black',
  fontSize: '35px',
};

const ReservationlistPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {

    const exampleData = [
      {
        doctorName: '김민수의사',
        hospitalName: '편안한 메디컬 센터',
        appointmentDate: '2024-01-23',
        medicalSubject: 'Cardiology',
        doctorImage: '/doctor1.jpeg',
      },
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
