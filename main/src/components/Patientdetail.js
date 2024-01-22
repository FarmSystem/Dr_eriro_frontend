import { useState, useCallback, useEffect } from "react";
import React from "react";
import MyCalendar from "./MyCal";
import Patient from "./PatientC";
import Lastpati from "./lastpati";
import loadingimg from "../asset/loading.gif";

const Patientdetails = ({
  patient,
  allpatient,
  onChildClick,
  patientdetail,
}) => {
  const [paymentType, setPaymentType] = useState(null);
  const [movementType, setMovementType] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [pastdata1, setPastdata] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // API 호출 및 데이터 받아오는 로직
  //       const response = await fetch(
  //         `http://15.165.145.132:8000/api/v1/reservations/patient-details/${patient.id}`
  //       );
  //       const data = await response.json();
  //       setPastdata(data);
  //       // 받아온 데이터를 상태에 업데이트
  //       return data;
  //     } catch (error) {
  //       console.error("Error fetching past data:", error);
  //     }
  //   };

  //   fetchData(); // useEffect가 마운트될 때 한 번 호출

  //   console.log("Updated pastdata:", pastdata1);
  // }, []);

  const handleUpload = () => {
    // 여기에서 서버로 파일을 업로드하거나 다른 작업을 수행할 수 있습니다.
    if (audioFile) {
      setLoading(true);
      setTimeout(() => {
        // 여기에서 실제로 파일을 서버로 전송하거나 다른 작업을 수행합니다.

        // 작업이 완료되면 로딩 상태를 false로 변경합니다.
        setLoading(false);
      }, 3000);
      console.log("업로드할 파일:", audioFile);
      // 서버로 파일 업로드 또는 다른 작업 수행
    } else {
      console.log("파일이 선택되지 않았습니다.");
    }
  };

  const pastrecod = () => {
    const pastdata = patientdetail;

    const matchingRecords = pastdata.filter(
      (record) => record.patient.id === patient.id && record.status !== "w"
    );

    if (matchingRecords.length > 0) {
      const recordsInfo = matchingRecords.map((record) => {
        const reservationDate = new Date(record.reservation_date);
        const formattedDate = reservationDate.toISOString().split("T")[0];
        return {
          status: record.status,
          diagnosis: record.visit_for,
          date: formattedDate,
          symptoms: record.underlying_disease,
          prescribe: record.prescribe,
          cash: "65,000",
          recash: "5,000",
        };
      });
      return recordsInfo;
    } else {
      console.log("No matching records found.");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const [inputValues, setInputValues] = useState({
    symptoms: "",
    diagnosis: "",
    prescription: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSaveButtonClick = () => {
    // 현재 입력된 데이터를 수집하여 pastreco에 추가하는 로직
    const currentDate = new Date().toISOString().split("T")[0];
    const newPastrecoItem = {
      date: currentDate,
      ...inputValues,
      cash: "62,500",
      recash: "5,000",
    };
    const newPastreco = [...patient.pastreco, newPastrecoItem];
    const updatedPatient = {
      ...patient,
      patientstate: "a", // 여기서 patientstate를 업데이트
      pastreco: newPastreco,
    };
    console.log(updatedPatient);
  };
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const handleTreatmentClick = (index) => {
    setSelectedTreatment(index);
  };
  const handleprint = () => {
    console.log(patient);
  };
  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
  };

  const handleMovementTypeChange = (type) => {
    setMovementType(type);
  };

  const handleConfirmReservation = async () => {
    if (patient.patientstate === "w") {
      const confirmResult = window.confirm("예약을 완료하시겠습니까?");
      if (confirmResult) {
        patient.patientstate = "a";
        if (paymentType && paymentType !== "none") {
          patient.payroute = paymentType;
        }
        if (movementType && movementType !== "none") {
          patient.movement = movementType;
        }
        onChildClick("w");
      }
    } else if (patient.patientstate === "a") {
      const confirmResult = window.confirm("진료를 완료하시겠습니까?");
      if (confirmResult) {
        patient.patientstate = "c";
        // 기정이한테 보내주고
        const requestData = {
          underlying_disease: inputValues.symptoms,
          visit_for: inputValues.diagnosis,
          prescribe: inputValues.prescription,
        };
        console.log(requestData);
        const patientId = patient.id;
        const apiUrl = `http://15.165.145.132:8000/api/v1/reservations/update-examination/${patientId}`;

        try {
          // API 호출
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 추가적인 헤더 정보가 필요하다면 여기에 추가
            },
            body: JSON.stringify(requestData), // 데이터를 JSON 문자열로 변환
          });
          if (response.ok) {
            // 성공적으로 응답을 받은 경우
            console.log("진료 완료 데이터 전송 성공");
          } else {
            // 응답이 실패한 경우
            console.error("진료 완료 데이터 전송 실패");
          }
        } catch (error) {
          // 네트워크 오류 등의 예외 처리
          console.error("에러 발생", error);
        }
        onChildClick("a");
      }
    }
  };
  //

  const renderReservationButtons = () => {
    if (patient.patientstate === "w") {
      patient.pastreco = pastrecod();
      return (
        <div className="Patientdetails">
          <header className="patientdetailsheader">
            <span>{patient.name}</span>
            <span>
              {patient.gender}({patient.age})
            </span>
            <span>
              키:{patient.height} 체중:{patient.weight}
            </span>
            <span style={{ marginLeft: "200px" }}>
              방문진료 사유{" "}
              <span
                style={{
                  backgroundColor: "#466bdc",
                  color: "white",
                  borderRadius: "15px",
                  padding: "5px",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                {patient.symptoms}
              </span>
            </span>
            <span>
              이동거리편도 :
              <span
                style={{
                  backgroundColor: "#466bdc",
                  color: "white",
                  borderRadius: "15px",
                  padding: "5px",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                {patient.distance}
              </span>
            </span>
          </header>
          <body className="patientdetailsbody">
            <div className="patientbodyfirstdiv">
              <section className="pastrecord12">
                <h4>과거진료기록</h4>
                <div className="patientdetails-reco" style={{ height: "100%" }}>
                  <div className="patientdetails-reco-list">
                    {patient.pastreco.map((treatment, index) => (
                      <div
                        key={index}
                        className={`patientdetails-reco-listn ${
                          selectedTreatment === index ? "selected" : ""
                        }`}
                        onClick={() => handleTreatmentClick(index)}
                      >
                        {treatment.date}
                        <div>{index + 1}차 진료</div>
                        {treatment && (
                          <div style={{ lineHeight: "30px" }}>
                            {treatment.title}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="patientdetails-reco-detail">
                    <div className="patientdetails-reco-detail-head">
                      진료기록 {patient.pastreco[selectedTreatment]?.date}
                    </div>
                    <div className="patientdetails-reco-detail-body">
                      <div className="patientdetails-reco-detail-body-head">
                        증상
                      </div>
                      <div className="patientdetails-reco-detail-body-body">
                        {patient.pastreco[selectedTreatment]?.symptoms}
                      </div>
                      <div className="patientdetails-reco-detail-body-head">
                        상병
                      </div>
                      <div className="patientdetails-reco-detail-body-body">
                        {patient.pastreco[selectedTreatment]?.diagnosis}
                      </div>
                      <div className="patientdetails-reco-detail-body-head">
                        처방
                      </div>
                      <div className="patientdetails-reco-detail-body-body">
                        {patient.pastreco[selectedTreatment]?.prescription}
                        <div>AH322 코로나19</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="patientreason-distance"></section>
              <section className="calendar">
                <h4>캘린더</h4>
                <div>
                  <MyCalendar allpatient={allpatient} />
                </div>
              </section>
              <div className="confirm-button">
                <button className="confbu" onClick={handleConfirmReservation}>
                  예약 확정
                </button>
                <button className="confbu2">에약 취소/ 전화</button>
              </div>
              {/* {isModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <p>예약이 확정되었습니다.</p>
                      <button onClick={handleCloseModal()}>닫기</button>
                    </div>
                  </div>
                )} */}
            </div>
            <div className="patientbodyseconddiv">
              <section className="patientside">
                <h4>팔수 작성</h4>
                <div>{renderPaymentButtons()}</div>
              </section>
              <section className="patientside">
                <h4>거동불편 유형</h4>
                {renderMovementInfo()}
              </section>
              <section className="pastrecord">
                <h4>자동 메모</h4>
                <div style={{ color: "#ccc" }}>
                  Please upload the audio file{" "}
                </div>
              </section>
              <section className="patientmoney">
                <h4>예상수가</h4>
                <div>수가는 123,456원으로 예상됩니다.</div>
              </section>
              <section className="audiiod">
                <span className="audioinput">
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileUpload}
                  />
                  <button onClick={handleUpload}>업로드</button>
                </span>
                {loading && (
                  <img
                    src={loadingimg}
                    alt="로딩 중"
                    style={{ width: "40px", margin: "0 auto" }}
                  />
                )}
              </section>
            </div>
          </body>
        </div>
      );
    } else if (patient.patientstate === "a") {
      patient.pastreco = pastrecod();
      return (
        <div className="Patientdetails">
          <div
            style={{
              padding: "10px",
              backgroundColor: "#4694DC",
              color: "white",
              fontSize: "25px",
            }}
          >
            예약완료
          </div>
          <header>"{patient.name}" 환자의 예약 내역</header>
          <div className="patientdetails-top">
            <div className="patientdetails-left">
              <div className="patientdetails-info">
                <div className="patientdetails-name">{patient.name}</div>
                <div className="pateinetdetails-spec">
                  {patient.age} | 건강보험 | 초진 | 방문진료 | {patient.gender}{" "}
                  | {patient.symptoms}
                </div>
                <div className="patientdetails-name">음성 메모</div>
                <div className="pateinetdetails-spec">
                  키워드1 | 키워드2 | 키워드3 | 키워드4 | {patient.symptoms}
                </div>
                <div className="patientdetails-name">
                  지불 유형 : {patient.payroute}
                </div>
                <div className="patientdetails-name">
                  거동 유형 : {patient.movement}
                </div>
              </div>
              {/* 여기서부터 수정 */}
              <div className="patientdetails-reco">
                <div className="patientdetails-reco-list">
                  {patient.pastreco.map((treatment, index) => (
                    <div
                      key={index}
                      className={`patientdetails-reco-listn ${
                        selectedTreatment === index ? "selected" : ""
                      }`}
                      onClick={() => handleTreatmentClick(index)}
                    >
                      {treatment.date}
                      <div>{index + 1}차 진료</div>
                      {treatment && (
                        <div style={{ lineHeight: "30px" }}>
                          {treatment.title}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="patientdetails-reco-detail">
                  <div className="patientdetails-reco-detail-head">
                    진료기록 {patient.pastreco[selectedTreatment]?.date}
                  </div>
                  <div className="patientdetails-reco-detail-body">
                    <div className="patientdetails-reco-detail-body-head">
                      증상
                    </div>
                    <div className="patientdetails-reco-detail-body-body">
                      {patient.pastreco[selectedTreatment]?.symptoms}
                    </div>
                    <div className="patientdetails-reco-detail-body-head">
                      상병
                    </div>
                    <div className="patientdetails-reco-detail-body-body">
                      {patient.pastreco[selectedTreatment]?.diagnosis}
                    </div>
                    <div className="patientdetails-reco-detail-body-head">
                      처방
                    </div>
                    <div className="patientdetails-reco-detail-body-body">
                      {patient.pastreco[selectedTreatment]?.prescription}
                      <div>AH322 코로나19</div>
                    </div>
                    <div className="patientdetails-reco-detail-body-cash">
                      <div>총 진료비</div>
                      <div>
                        <span style={{ color: "black", fontWeight: "bold" }}>
                          {patient.pastreco[selectedTreatment]?.cash}
                        </span>{" "}
                        원
                      </div>
                    </div>
                    <div className="patientdetails-reco-detail-body-paymoney">
                      <div>수납금</div>
                      <div>
                        <span style={{ color: "black", fontWeight: "bold" }}>
                          {patient.pastreco[selectedTreatment]?.recash}
                        </span>{" "}
                        원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="patientdetails-right">
              <div className="patientdetails-right-head1">진료 기록 작성</div>
              <div className="symptoms">
                <div
                  className="patientdetails-right-head"
                  style={{ border: "none" }}
                >
                  증상
                </div>
                <textarea
                  name="symptoms"
                  placeholder="여기에 입력하세요"
                  value={inputValues.symptoms}
                  onChange={handleInputChange}
                ></textarea>
                <div
                  className="patientdetails-right-head"
                  style={{ border: "none" }}
                >
                  상병
                </div>
                <textarea
                  name="diagnosis"
                  style={{ height: "50px" }}
                  placeholder="여기에 입력하세요"
                  value={inputValues.diagnosis}
                  onChange={handleInputChange}
                ></textarea>
                <div
                  className="patientdetails-right-head"
                  style={{ border: "none" }}
                >
                  처방
                </div>
                <textarea
                  name="prescription"
                  style={{ height: "100px" }}
                  placeholder="여기에 입력하세요"
                  value={inputValues.prescription}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="patientdetails-bottom">
            <button className="confbu" onClick={handleConfirmReservation}>
              진료 완료
            </button>
          </div>
        </div>
      );
    }
    patient.pastreco = pastrecod();
    console.log("pastreco : ", patient.pastreco);
    return (
      <div className="Patientdetails">
        <div
          style={{
            padding: "10px",
            backgroundColor: "#4694DC",
            color: "white",
            fontSize: "25px",
          }}
        >
          진료완료
        </div>
        <header>"{patient.name}" 환자의 예약 내역</header>
        <div className="patientdetails-top">
          <div className="patientdetails-left">
            <div className="patientdetails-info">
              <div className="patientdetails-name">{patient.name}</div>
              <div className="pateinetdetails-spec">
                {patient.age} | 건강보험 | 초진 | 방문진료 | {patient.gender} |
                복통{/* {patient.symptoms} */}
              </div>
              <div className="patientdetails-name">음성 메모</div>
              <div className="pateinetdetails-spec">
                키워드1 | 키워드2 | 키워드3 | 키워드4 | {patient.symptoms}
              </div>
              <div className="patientdetails-name">
                지불 유형 : {patient.payroute}
              </div>
              <div className="patientdetails-name">
                거동 유형 : {patient.movement}
              </div>
            </div>
            {/* 여기서부터 수정 */}
            <div className="patientdetails-reco">
              <div className="patientdetails-reco-list">
                {patient.pastreco.map((treatment, index) => (
                  <div
                    key={index}
                    className={`patientdetails-reco-listn ${
                      selectedTreatment === index ? "selected" : ""
                    }`}
                    onClick={() => handleTreatmentClick(index)}
                  >
                    {treatment.date}
                    <div>{index + 1}차 진료</div>
                    {treatment && (
                      <div style={{ lineHeight: "30px" }}>
                        {treatment.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="patientdetails-reco-detail">
                <div className="patientdetails-reco-detail-head">
                  진료기록 {patient.pastreco[selectedTreatment]?.date}
                </div>
                <div className="patientdetails-reco-detail-body">
                  <div className="patientdetails-reco-detail-body-head">
                    증상
                  </div>
                  <div className="patientdetails-reco-detail-body-body">
                    {patient.pastreco[selectedTreatment]?.symptoms}
                  </div>
                  <div className="patientdetails-reco-detail-body-head">
                    상병
                  </div>
                  <div className="patientdetails-reco-detail-body-body">
                    {patient.pastreco[selectedTreatment]?.diagnosis}
                  </div>
                  <div className="patientdetails-reco-detail-body-head">
                    처방
                  </div>
                  <div className="patientdetails-reco-detail-body-body">
                    {patient.pastreco[selectedTreatment]?.prescription}
                    <div>AH322 코로나19</div>
                  </div>
                  <div className="patientdetails-reco-detail-body-cash">
                    <div>총 진료비</div>
                    <div>
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        {patient.pastreco[selectedTreatment]?.cash}
                      </span>{" "}
                      원
                    </div>
                  </div>
                  <div className="patientdetails-reco-detail-body-paymoney">
                    <div>수납금</div>
                    <div>
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        {patient.pastreco[selectedTreatment]?.recash}
                      </span>{" "}
                      원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="patientdetails-right">
            <div className="patientdetails-right-head1">진료 기록 작성</div>
            <div className="symptoms">
              <div
                className="patientdetails-right-head"
                style={{ border: "none" }}
              >
                증상
              </div>
              <textarea
                name="symptoms"
                placeholder={inputValues.symptoms}
                value={inputValues.symptoms}
                onChange={handleInputChange}
              ></textarea>
              <div
                className="patientdetails-right-head"
                style={{ border: "none" }}
              >
                상병
              </div>
              <textarea
                name="diagnosis"
                style={{ height: "50px" }}
                placeholder="여기에 입력하세요"
                value={inputValues.diagnosis}
                onChange={handleInputChange}
              ></textarea>
              <div
                className="patientdetails-right-head"
                style={{ border: "none" }}
              >
                처방
              </div>
              <textarea
                name="prescription"
                style={{ height: "100px" }}
                placeholder="여기에 입력하세요"
                value={inputValues.prescription}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="patientdetails-bottom">
          <button className="confbu" onClick={handleConfirmReservation}>
            {" "}
            진료가 완료되었습니다.{" "}
          </button>
        </div>
      </div>
    );
  };

  const renderMovementInfo = () => {
    if (patient.movement !== "none") {
      return (
        <>
          <div className="paymentbut2">
            <button
              className={movementType === "마비" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("마비")}
              style={{
                backgroundColor: movementType === "마비" ? "#4694DC" : "",
                border: "#ccc solid 1px",
                color: movementType === "마비" ? "#ffffff" : "#000000",
              }}
            >
              마비
            </button>
            <button
              className={movementType === "수술 직후" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("수술 직후")}
              style={{
                backgroundColor: movementType === "수술 직후" ? "#4694DC" : "",
                border: "#ccc solid 1px",
                color: movementType === "수술 직후" ? "#ffffff" : "#000000",
              }}
            >
              수술 직후
            </button>
            <button
              className={movementType === "말기질환" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("말기질환")}
              style={{
                backgroundColor: movementType === "말기질환" ? "#4694DC" : "",
                border: "#ccc solid 1px",
                color: movementType === "말기질환" ? "#ffffff" : "#000000",
              }}
            >
              말기질환
            </button>
          </div>
          <div className="paymentbut2">
            <button
              className={movementType === "의료기기 부착" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("의료기기 부착")}
              style={{
                backgroundColor:
                  movementType === "의료기기 부착" ? "#4694DC" : "",
                border: "#ccc solid 1px",
                color: movementType === "의료기기 부착" ? "#ffffff" : "#000000",
              }}
            >
              의료기기 부착
            </button>
            <button
              className={movementType === "욕창 및 궤양" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("욕창 및 궤양")}
              style={{
                backgroundColor:
                  movementType === "욕창 및 궤양" ? "#4694DC" : "",
                border: "#ccc solid 1px",
                color: movementType === "욕창 및 궤양" ? "#ffffff" : "#000000",
              }}
            >
              욕창 및 궤양
            </button>
          </div>
          <div className="paymentbut2">
            <button
              className={movementType === "정신과적 질환" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("정신과적 질환")}
              style={{
                backgroundColor:
                  movementType === "정신과적 질환" ? "#4694DC" : "",
                border: "#ccc solid 1px",
                color: movementType === "정신과적 질환" ? "#ffffff" : "#000000",
              }}
            >
              정신과적 질환
            </button>
            <button
              className={
                movementType === "신경계 퇴행성 질환" ? "selected" : ""
              }
              onClick={() => handleMovementTypeChange("신경계 퇴행성 질환")}
              style={{
                backgroundColor:
                  movementType === "신경계 퇴행성 질환" ? "#4694DC" : "",
                border: "#ccc solid 1px",
                color:
                  movementType === "신경계 퇴행성 질환" ? "#ffffff" : "#000000",
              }}
            >
              신경계 퇴행성 질환
            </button>
          </div>
        </>
      );
    } else {
      return <div>{`거동불편 유형: ${patient.movement}`}</div>;
    }
  };

  const renderPaymentButtons = () => {
    if (patient.payroute !== "none") {
      return (
        <div className="paymentbut">
          <button
            className={paymentType === "본인부담" ? "selected" : ""}
            onClick={() => handlePaymentTypeChange("본인부담")}
            style={{
              backgroundColor: paymentType === "본인부담" ? "#4694DC" : "",
              border: "#ccc solid 1px",
              marginRight: "30px,",
              color: paymentType === "본인부담" ? "#ffffff" : "#000000",
            }}
          >
            본인 부담
          </button>
          <button
            className={paymentType === "전액지원" ? "selected" : ""}
            onClick={() => handlePaymentTypeChange("전액지원")}
            style={{
              backgroundColor: paymentType === "전액지원" ? "#4694DC" : "",
              border: "#ccc solid 1px",
              color: paymentType === "전액지원" ? "#ffffff" : "#000000",
            }}
          >
            전액 지원
          </button>
        </div>
      );
    } else {
      return <div>{`비용 지불 방식: ${patient.payroute}`}</div>;
    }
  };

  if (!patient) {
    return <div></div>;
  }
  return <div className="main-detail">{renderReservationButtons()}</div>;
};
export default Patientdetails;
