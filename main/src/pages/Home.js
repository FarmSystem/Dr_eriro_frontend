import { useContext, useState, useEffect } from "react";
import Navbar from "../components/NavbarC";
import Patient from "../components/PatientC";
import { PatientStateContext } from "../App";
import Patientdetails from "../components/Patientdetail";
import doctorimg from "./doctor.jpeg";
const Home = () => {
  const patientlist = useContext(PatientStateContext);
  const [filteredPatients, setFilteredPatients] = useState(patientlist);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("w");

  const handleButtonClick = (state) => {
    setActiveButton(state);
    const filteredData = patientlist.filter(
      (patient) => patient.patientstate === state
    );
    setFilteredPatients(filteredData);
  };

  const handleProfile = (state) => {
    if (state === "프로필관리") {
      setIsProfileVisible(true);
    } else {
      setIsProfileVisible(false);
    }
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="container">
      <div>
        <nav className="sidebar">
          <h1>Dr.이리로</h1>
          <ul>
            <li>홈페이지</li>
            <li onClick={() => handleProfile("환자관리")}>환자 관리</li>
            <li onClick={() => handleProfile("프로필관리")}>프로필 관리</li>
          </ul>
        </nav>
      </div>
      {isProfileVisible ? (
        <div className="profile">
          <h1>프로필 관리</h1>
          <div className="flexbox">
            <div className="firstinfo">
              <div className="firstleft">
                <div>프로필 사진</div>
                <img src={doctorimg} alt="의사사진" />
              </div>
              <div className="firstright">
                <div className="firstright-head">이름</div>
                <div className="firstright-body">이리로</div>
                <div className="firstright-head">성별</div>
                <div className="firstright-body">남자</div>
                <div className="firstright-head">소속 병원</div>
                <div className="firstright-body">Dr.이리로</div>
              </div>
            </div>
            <div className="footinfo">
              <div className="footinfo-head">왕진 가능 지역</div>
              <div className="footinfo-body">중구 전체, 서울역 입구</div>
              <div className="footinfo-head">주요 관찰 과목</div>
              <div className="footinfo-body">관절 질환</div>
              <div className="footinfo-head">진찰 가능 시간</div>
              <div className="footinfo-body">
                토요일 10:00 - 17:00 / 일요일 17:00 - 19:00
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="chart">
          <header className="chartheader">
            <span>차트</span>
          </header>
          <body>
            <div className="patient-listbody">
              <h3>환자 리스트</h3>
              <div className="patient-list">
                <button
                  className={`patient-list-button ${
                    activeButton === "w" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("w")}
                >
                  예약 신청
                </button>
                <button
                  className={`patient-list-button ${
                    activeButton === "a" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("a")}
                >
                  예약 완료
                </button>
                <button
                  className={`patient-list-button ${
                    activeButton === "c" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("c")}
                >
                  진료 완료
                </button>
                <div>
                  {filteredPatients.map((patient) => (
                    <div
                      key={patient.name}
                      onClick={() => handlePatientClick(patient)}
                    >
                      <Patient {...patient} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="patient-detail-info">
              <Patientdetails
                patient={selectedPatient}
                allpatient={patientlist}
                onChildClick={handleButtonClick}
              />
            </div>
          </body>
        </div>
      )}
    </div>
  );
};

export default Home;
