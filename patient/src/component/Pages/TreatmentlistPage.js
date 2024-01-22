import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TreatmentlistPage.css';

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'black',
  fontSize: '35px',
};

const TreatmentlistPage = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const exampleData = [
      {
        doctorName: '박준서의사',
        hospitalName: '블루하트 치료의원',
        appointmentDate: '2024-01-01',
        medicalSubject: '이비인후과',
        doctorImage: '/doctor1.jpeg',
      },
      {
        doctorName: '김민주의사',
        hospitalName: '그린힐즈 의원',
        appointmentDate: '2023-02-15',
        medicalSubject: '안과',
        doctorImage: '/doctor2.jpeg',
      },
      {
        doctorName: '김민주의사',
        hospitalName: '그린힐즈 의원',
        appointmentDate: '2022-09-23',
        medicalSubject: '안과',
        doctorImage: '/doctor2.jpeg',
      },
    ];

    setTreatments(exampleData);
  }, []);

  return (
    <div>
      <h1>진료 내역</h1>
      <ul>
        {treatments.map((treatment, index) => (
          <li key={index} className="reservation-item">
            <div className="doctor-image">
              <img src={treatment.doctorImage} alt={treatment.doctorName} />
            </div>
            <div className="info-container">
              <div className="doctor-info">
                <Link to={`/treatmentlist/detail`} style={linkStyle}>
                  <h3>{treatment.doctorName}</h3> </Link>
                <span className="hospital-name">{treatment.hospitalName}</span>
              </div>
              <div className="appointment-info">
                <span className="date">진료 날짜: {treatment.appointmentDate}</span>
                <br></br>
                <span className="subject">진료 과목: {treatment.medicalSubject}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentlistPage;
