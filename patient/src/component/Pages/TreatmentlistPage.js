import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TreatmentlistPage.css'; 

const linkStyle = {
  textDecoration: 'none', // 밑줄 없애기
  fontWeight: 'bold',
  color: 'black', // 텍스트 색상을 원하는 색으로 설정
  fontSize: '35px',
};

const TreatmentlistPage = () => {
  const [treatments, setTreatments] = useState([]);

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
      {
        doctorName: 'Dr. Johnson',
        hospitalName: 'Community Clinic',
        appointmentDate: '2022-02-15',
        medicalSubject: 'Dermatology',
        doctorImage: '/doctor2.jpeg',
      },
      // ... 다른 예시 데이터
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
              <Link to ={`/treatmentlist/detail`} style={linkStyle}>
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
