import React, { useState, useEffect } from 'react';
import './Reservationlistdetail.css';

/*
const Reservationlistdetail = () => {
  const [hospitalInfo, setHospitalInfo] = useState({});
  const [medicalInfo, setMedicalInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 예시로 사용할 백엔드 API 엔드포인트
    const apiUrl = 'https://example.com/api/reservation/detail';

    // API 호출
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // 받아온 데이터를 상태에 설정
        setHospitalInfo(data.hospitalInfo);
        setMedicalInfo(data.medicalInfo);
        setPaymentInfo(data.paymentInfo);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // 마운트 시에만 호출하도록 설정*/
  const Reservationlistdetail = () => {
    const [hospitalInfo, setHospitalInfo] = useState({
      doctorName: '김민수의사',
      hospitalName: '편안한 메디컬 센터',
      appointmentDate: '2024-01-23',
    });
  
    const [medicalInfo, setMedicalInfo] = useState({
      symptoms: '배가 아파요',
      patientType: '초진',
    });
  
    const [paymentInfo, setPaymentInfo] = useState({
      paymentMethod: '신용카드',
    });
  
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      // 여기에서는 예시 데이터를 사용하므로 별도의 API 호출이 필요하지 않습니다.
      // 만약 백엔드 API를 사용한다면 이 부분을 해당 API 호출 코드로 변경해야 합니다.
      // setLoading(true);  // API 호출 전에 로딩 상태를 활성화할 수 있습니다.
  
      // 여기에서는 setTimeout 함수를 사용하여 비동기적인 로딩을 시뮬레이션합니다.
      setTimeout(() => {
        // 받아온 데이터를 상태에 설정
        setHospitalInfo({
          doctorName: '김민수의사',
          hospitalName: '편안한 메디컬 센터',
          appointmentDate: '2024-01-23',
        });
        setMedicalInfo({
          symptoms: '배가 아파요',
          patientType: '초진',
        });
        setPaymentInfo({
          paymentMethod: '신용카드',
        });
  
        setLoading(false);  // 데이터 로딩 완료 후 로딩 상태를 해제할 수 있습니다.
      }, 1000); // 1초 후에 데이터를 설정합니다. 실제로는 백엔드 API 호출이 될 것입니다.
    }, []);

  return (
    <div className="square">
      <br></br>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>예약이 완료되었어요</h1><br /><br /><br />
          <div className='info'>
            <h2>병원 정보</h2>
            <p>의사 이름 : {hospitalInfo.doctorName}</p>
            <p>병원 이름 : {hospitalInfo.hospitalName}</p>
            <p>예약 날짜 : {hospitalInfo.appointmentDate}</p>
          </div><br /><hr></hr><br />

          <div className='info'>
            <h2>진료 정보</h2>
            
            <p>증상 : {medicalInfo.symptoms}</p>
            <p>진료 대상 : {medicalInfo.patientType}</p>
          </div><br /><hr></hr><br />

          <div className='info'>
            <h2>결제 정보</h2>
            <p>결제 방법 : {paymentInfo.paymentMethod}</p>
            </div>
          <br /><br /><br /><br />
        </>
      )}
    </div>
  );
};

export default Reservationlistdetail;
