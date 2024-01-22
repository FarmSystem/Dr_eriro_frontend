import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Apply.css';

function Apply() {
    const [isChecked, setIsChecked] = useState(false);
    const [patientInfo, setPatientInfo] = useState({
        name: '',
        gender: 'female', 
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
        if (!patientInfo.name || !patientInfo.birthYear || !patientInfo.birthMonth || !patientInfo.birthDay) {
            alert('환자 정보를 모두 입력해주세요.');
            return;
        }

        if (!selectedTab) {
            alert('진료 과목을 선택해주세요.');
            return;
        }

        if (!selectedSymptom) {
            alert('증상을 선택해주세요.');
            return;
        }

        navigate('/reservationlist/detail');
        console.log('Submitting patient information:', patientInfo);
    };

    const [selectedTab, setSelectedTab] = useState('internalMedicine'); 

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const [selectedSymptom, setSelectedSymptom] = useState(null);

    const handleSymptomChange = (symptom) => {
        setSelectedSymptom(symptom);
    };

    return (
        <div className='center'>
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
                </div>
                <div className='tab-container'>
                    <h2>진료 과목</h2>
                    <div
                        className={`tab ${selectedTab === 'internalMedicine' ? 'active' : ''}`}
                        onClick={() => handleTabChange('internalMedicine')}
                    >
                        내과
                    </div>
                    <div
                        className={`tab ${selectedTab === 'obstetricsAndGynecology' ? 'active' : ''}`}
                        onClick={() => handleTabChange('obstetricsAndGynecology')}
                    >
                        산부인과
                    </div>
                    <div
                        className={`tab ${selectedTab === 'otolaryngology' ? 'active' : ''}`}
                        onClick={() => handleTabChange('otolaryngology')}
                    >
                        이비인후과
                    </div>
                    <div
                        className={`tab ${selectedTab === 'orthopedics' ? 'active' : ''}`}
                        onClick={() => handleTabChange('orthopedics')}
                    >
                        정형외과
                    </div>
                    <div
                        className={`tab ${selectedTab === 'ophthalmology' ? 'active' : ''}`}
                        onClick={() => handleTabChange('ophthalmology')}
                    >
                        안과
                    </div>
                    <div
                        className={`tab ${selectedTab === 'pediatrics' ? 'active' : ''}`}
                        onClick={() => handleTabChange('pediatrics')}
                    >
                        소아과
                    </div>
                    <div
                        className={`tab ${selectedTab === 'familyMedicine' ? 'active' : ''}`}
                        onClick={() => handleTabChange('familyMedicine')}
                    >
                        가정의학과
                    </div>
                </div>
                <div className='symptom-container'>
                    <h2>증상</h2>
                    <div
                        className={`symptom-tab ${selectedSymptom === 'head' ? 'active' : ''}`}
                        onClick={() => handleSymptomChange('head')}
                    >
                        머리가 아파요
                    </div>
                    <div
                        className={`symptom-tab ${selectedSymptom === 'orthopedics_' ? 'active' : ''}`}
                        onClick={() => handleSymptomChange('orthopedics_')}
                    >
                        다리가 아파요
                    </div>
                    <div
                        className={`symptom-tab ${selectedSymptom === 'abdomen' ? 'active' : ''}`}
                        onClick={() => handleSymptomChange('abdomen')}
                    >
                        배가 아파요
                    </div>
                    <div
                        className={`symptom-tab ${selectedSymptom === 'fever' ? 'active' : ''}`}
                        onClick={() => handleSymptomChange('fever')}
                    >
                        열이 나요
                    </div>
                    <div
                        className={`symptom-tab ${selectedSymptom === 'rash' ? 'active' : ''}`}
                        onClick={() => handleSymptomChange('rash')}
                    >
                        두드러기가 났어요
                    </div>
                    <div
                        className={`symptom-tab ${selectedSymptom === 'stomach' ? 'active' : ''}`}
                        onClick={() => handleSymptomChange('stomach')}
                    >
                        속이 안 좋아요
                    </div>
                    <div
                        className={`symptom-tab ${selectedSymptom === 'cough' ? 'active' : ''}`}
                        onClick={() => handleSymptomChange('cough')}
                    >
                        기침이 나와요
                    </div>
                </div>
            </div>

            <button className='apply-button' onClick={handleSubmit}>예약 신청하기</button>
        </div>
    );
}

export default Apply;
