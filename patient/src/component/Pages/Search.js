import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'black',
  fontSize: '35px',
};

const specialties = {
  internalMedicine: '내과',
  obstetricsAndGynecology: '산부인과',
  otolaryngology: '이비인후과',
  orthopedics: '정형외과',
  ophthalmology: '안과',
  pediatrics: '소아과',
  rehabilitationMedicine: '재활의학과',
};

const doctorsData = {
  internalMedicine: [
    { name: '김민수의사', hospital: '편안한 메디컬 센터', address: '서울특별시 4개구', specialty: '진료과목 : 내과' },
    { name: '송지원의사', hospital: '그린힐즈 의원', address: '서울특별시 5개구', specialty: '진료과목 : 내과' },
    { name: '손영진의사', hospital: '좋은건강병원', address: '서울특별시 3개구', specialty: '진료과목 : 내과' },
    // 내과 의사들의 데이터 추가
  ],
  obstetricsAndGynecology: [
    { name: '박성민의사', hospital: '현대 건강의원', address: '서울특별시 3개구', specialty: '진료과목 : 산부인과' },
    { name: '김지영의사', hospital: '서울 헬스케어 센터', address: '서울특별시 5개구', specialty: '진료과목 : 산부인과' },
    { name: '이지현의사', hospital: '편안한 치료의원', address: '서울특별시 7개구', specialty: '진료과목 : 산부인과' },
    // 산부인과 의사들의 데이터 추가
  ],
  otolaryngology: [
    // 이비인후과 의사들의 데이터 추가
    { name: '박준서의사', hospital: '블루하트 치료의원', address: '서울특별시 2개구', specialty: '진료과목 : 이비인후과' },
    { name: '정서영의사', hospital: '좋은건강병원', address: '서울특별시 15개구', specialty: '진료과목 : 이비인후과' },
    { name: '이현우의사', hospital: '편안한 메디컬 센터', address: '서울특별시 10개구', specialty: '진료과목 : 이비인후과' },
  ],
  orthopedics: [
    { name: '윤지민의사', hospital: '좋은건강병원', address: '서울특별시 7개구', specialty: '진료과목 : 정형외과' },
    { name: '이지영의사', hospital: '편안한 메디컬 센터', address: '서울특별시 15개구', specialty: '진료과목 : 정형외과' },
    { name: '강승우의사', hospital: '현대 건강의원', address: '서울특별시 1개구', specialty: '진료과목 : 정형외과' },
  ],
  ophthalmology: [
    { name: '임현우의사', hospital: '블루하트 치료의원', address: '서울특별시 15개구', specialty: '진료과목 : 안과' },
    { name: '최재호의사', hospital: '편안한 메디컬 센터', address: '서울특별시 6개구', specialty: '진료과목 : 안과' },
    { name: '김민주의사', hospital: '그린힐즈 의원', address: '서울특별시 11개구', specialty: '진료과목 : 안과' },
  ],
  pediatrics: [
    { name: '이태영의사', hospital: '편안한 메디컬 센터', address: '서울특별시 12개구', specialty: '진료과목 : 소아과' },
    { name: '정민재의사', hospital: '힐링메디컬클리닉', address: '서울특별시 3개구', specialty: '진료과목 : 소아과' },
    { name: '윤도윤의사', hospital: '좋은건강병원', address: '서울특별시 2개구', specialty: '진료과목 : 소아과' },
  ],
  rehabilitationMedicine: [
    { name: '임서현의사', hospital: '편안한 메디컬 센터', address: '서울특별시 6개구', specialty: '진료과목 : 재활의학과' },
    { name: '이태영의사', hospital: '현대 건강의원', address: '서울특별시 10개구', specialty: '진료과목 : 재활의학과' },
    { name: '김민수의사', hospital: '그린블루 의원', address: '서울특별시 15개구', specialty: '진료과목 : 재활의학과' },
  ],
};

function Search() {
  const [selectedTab, setSelectedTab] = useState('internalMedicine');
  const [doctorsList, setDoctorsList] = useState(doctorsData[selectedTab]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setDoctorsList(doctorsData[tab]);
  };

  return (
    <div>
      <div className='search'>
        <div className='search-doctor'>
          <h1>의사 찾기</h1>
          <img src='/map_icon.png' alt='지도 아이콘' className='map-icon' />
          <p>서울특별시 중구 필동로 1길 30</p>
        </div>

        {/* 탭 선택 */}
        <div className='tab-container'>
          <h2>진료 과목</h2>
          {Object.keys(specialties).map((tab) => (
            <div
              key={tab}
              className={`tab ${selectedTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {specialties[tab]}
            </div>
          ))}
        </div>

        {/* 증상 선택 */}
        <div className='symptom-container'>
          <h2>증상</h2>
          <div className='symptom-tab'>머리가 아파요</div>
          <div className='symptom-tab'>다리가 아파요</div>
          <div className='symptom-tab'>배가 아파요</div>
          <div className='symptom-tab'>열이 나요</div>
          <div className='symptom-tab'>두드러기가 났어요</div>
          <div className='symptom-tab'>속이 안 좋아요</div>
          <div className='symptom-tab'>기침이 나와요</div>
        </div>
        <br /><br /><hr></hr>
      </div>

      <div className='doctor-list'>
        <h1>의사 목록</h1>
        {doctorsList.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
}

function DoctorCard({ name, hospital, address, specialty }) {
  return (
    <div className='total'>
      <ul>
        <li className='doctor-card'>
          <img src='/doctor1.jpeg' alt="이미지 설명" />
          <div className='info-container'>
            <div className='doctor-info'>
              <Link to={`detail`} style={linkStyle}>
                <h3>{name}</h3>
              </Link>
              <span className='hospital-name'>{hospital}</span>
            </div>
            <div className="appointment-info">
              <span className='address'>{address}</span><br />
              <span className='specialty'>{specialty}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Search;
