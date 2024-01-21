import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Apply.css';

function Apply() {
    const [isChecked, setIsChecked] = useState(false);
    const [patientInfo, setPatientInfo] = useState({
        name: '',
        gender: 'female', // 초기값은 여자로 설정
        birthYear: '',
        birthMonth: '',
        birthDay: ''
    });

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientInfo({
            ...patientInfo,
            [name]: value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/reservationlist/detail'); 
        // Here you can send the patientInfo data to the server
        console.log('Submitting patient information:', patientInfo);
        // Add your API call or data submission logic here
    };

    const [selectedTab, setSelectedTab] = useState('internalMedicine'); // 초기 선택된 탭

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        // 여기에서 선택된 탭에 따른 처리를 추가할 수 있습니다.
    };

    return (
        <div>
            <h1>예약 신청</h1>
            <br />
            <hr />
            <div className='reservation'>
            <div className='check'>
                <p>초진인지 재진인지 체크해주세요.</p>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    초진
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={!isChecked}
                        onChange={handleCheckboxChange}
                    />
                    재진
                </label>
            </div>
            <div className='patient-info'>
                <label>
                    환자 이름 :
                    <input
                        type="text"
                        name="name"
                        value={patientInfo.name}
                        onChange={handleInputChange}
                    />
                </label><br />
                <label>
                    환자 성별 :
                    <select
                        name="gender"
                        value={patientInfo.gender}
                        onChange={handleInputChange}
                    >
                        <option value="female">여자</option>
                        <option value="male">남자</option>
                    </select>
                </label><br />
                <label>
                    환자 생년월일 :
                    <select
                        name="birthYear"
                        value={patientInfo.birthYear}
                        onChange={handleInputChange}
                    >
                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <select
                        name="birthMonth"
                        value={patientInfo.birthMonth}
                        onChange={handleInputChange}
                    >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                    <select
                        name="birthDay"
                        value={patientInfo.birthDay}
                        onChange={handleInputChange}
                    >
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </select>
                </label><br /><br />
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
                    </div>
                
                    <button className='reservation-button' onClick={handleSubmit}>예약 신청하기</button>
                </div>
            </div>
        </div>
    );
}

export default Apply;
