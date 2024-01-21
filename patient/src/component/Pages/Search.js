import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const linkStyle = {
  textDecoration: 'none', // 밑줄 없애기
  fontWeight: 'bold',
  color: 'black', // 텍스트 색상을 원하는 색으로 설정
  fontSize: '35px',
};

function Search() {
  const [selectedTab, setSelectedTab] = useState('internalMedicine'); // 초기 선택된 탭

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    // 여기에서 선택된 탭에 따른 처리를 추가할 수 있습니다.
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
          <div
            className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
            onClick={() => handleTabChange('internalMedicine')}
          >
            내과
          </div>
          <div
            className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
            onClick={() => handleTabChange('internalMedicine')}
          >
            산부인과
          </div>
          <div
            className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
            onClick={() => handleTabChange('internalMedicine')}
          >
            이비인후과
          </div>
          <div
            className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
            onClick={() => handleTabChange('internalMedicine')}
          >
            정형외과
          </div>
          <div
            className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
            onClick={() => handleTabChange('internalMedicine')}
          >
            안과
          </div>
          <div
            className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
            onClick={() => handleTabChange('internalMedicine')}
          >
            소아과
          </div>
          <div
            className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
            onClick={() => handleTabChange('internalMedicine')}
          >
            재활의학과
          </div>
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
        </div><br /><br /><hr></hr>

      </div>
      <div className='doctor-list'>
        <h1>의사 목록</h1>
        <DoctorCard name='000의사' hospital='00병원' address='서울특별시 15개구' specialty='진료과목 : 가정의학과' />
        <DoctorCard name='000의사' hospital='00병원' address='서울특별시 5개구' specialty='진료과목 : 정형외과' />

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