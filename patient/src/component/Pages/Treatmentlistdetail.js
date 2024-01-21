import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Treatmentlistdetail.css';

const Treatmentlistdetail = () => {
  const [hospitalInfo, setHospitalInfo] = useState({
    doctorName: 'Dr. Smith',
    hospitalName: 'City Hospital',
    appointmentDate: '2022-01-01',
  });

  const [medicalInfo, setMedicalInfo] = useState({
    symptoms: 'Fever and cough',
    patientType: 'New patient',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    paymentMethod: 'Credit Card',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setHospitalInfo({
        doctorName: 'Dr. Smith',
        hospitalName: 'City Hospital',
        appointmentDate: '2022-01-01',
      });
      setMedicalInfo({
        symptoms: 'Fever and cough',
        patientType: 'New patient',
      });
      setPaymentInfo({
        paymentMethod: 'Credit Card',
      });

      setLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate('/review');
  }

  return (
    <div className="square">
      <br />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>진료 내역</h1>
          <button className="small-button" onClick={redirectToOtherPage}>후기 작성하기</button>
          <div>
            <h2>병원 정보</h2>
            <p>의사 이름: {hospitalInfo.doctorName}</p>
            <p>병원 이름: {hospitalInfo.hospitalName}</p>
            <p>예약 날짜: {hospitalInfo.appointmentDate}</p>
          </div>
          <hr />
  
          <div>
            <h2>진료 정보</h2>
            <p>증상: {medicalInfo.symptoms}</p>
            <p>진료 대상: {medicalInfo.patientType}</p>
          </div>
          <hr />
  
          <div>
            <h2>결제 정보</h2>
            <p>결제 방법: {paymentInfo.paymentMethod}</p>
          </div>
        </>
      )}
    </div>
  );
  
};

export default Treatmentlistdetail;
