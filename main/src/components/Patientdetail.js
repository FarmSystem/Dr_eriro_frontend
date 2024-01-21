import { useState } from "react";
import React from "react";
import MyCalendar from "./MyCal";

const Patientdetails = ({ patient, allpatient }) => {
  console.log(patient);
  const [paymentType, setPaymentType] = useState(null);
  const [movementType, setMovementType] = useState(null);

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
  };

  const handleMovementTypeChange = (type) => {
    setMovementType(type);
  };

  const handleConfirmReservation = () => {
    if (patient.patientstate === "예약신청") {
      patient.patientstate = "예약완료";
      if (paymentType && paymentType !== "none") {
        patient.payroute = paymentType;
      }
      if (movementType && movementType !== "none") {
        patient.movement = movementType;
      }
    }
  };

  const renderReservationButtons = () => {
    if (patient.patientstate === "예약신청") {
      return (
        <div className="confirm-button">
          <button onClick={handleConfirmReservation}>예약 확정</button>
          <button>에약 취소/ 전화</button>
        </div>
      );
    }
    return null;
  };
  const renderMovementInfo = () => {
    if (patient.movement === "none") {
      return (
        <>
          <div>
            <button
              className={movementType === "마비" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("마비")}
            >
              마비
            </button>
            <button
              className={movementType === "수술 직후" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("수술 직후")}
            >
              수술 직후
            </button>
            <button
              className={movementType === "말기질환" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("말기질환")}
            >
              말기질환
            </button>
          </div>
          <div>
            <button
              className={movementType === "의료기기 부착" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("의료기기 부착")}
            >
              의료기기 부착
            </button>
            <button
              className={movementType === "욕창 및 궤양" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("욕창 및 궤양")}
            >
              욕창 및 궤양
            </button>
          </div>
          <div>
            <button
              className={movementType === "정신과적 질환" ? "selected" : ""}
              onClick={() => handleMovementTypeChange("정신과적 질환")}
            >
              정신과적 질환
            </button>
            <button
              className={
                movementType === "신경계 퇴행성 질환" ? "selected" : ""
              }
              onClick={() => handleMovementTypeChange("신경계 퇴행성 질환")}
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
    if (patient.payroute === "none") {
      return (
        <>
          <button
            className={paymentType === "본인부담" ? "selected" : ""}
            onClick={() => handlePaymentTypeChange("본인부담")}
          >
            본인 부담
          </button>
          <button
            className={paymentType === "전액지원" ? "selected" : ""}
            onClick={() => handlePaymentTypeChange("전액지원")}
          >
            전액 지원
          </button>
        </>
      );
    } else {
      return <div>{`비용 지불 방식: ${patient.payroute}`}</div>;
    }
  };

  if (!patient) {
    return <div>없슴</div>;
  }
  return (
    <div className="Patientdetails">
      <header className="patientdetailsheader">
        <span>{patient.patientName}</span>
        <span>
          {patient.gender}
          {patient.age}({patient.birthday})
        </span>
        <span>
          키:{patient.height} 체중:{patient.weight}
        </span>
      </header>
      <body className="patientdetailsbody">
        <div className="patientbodyfirstdiv">
          <section className="pastrecord">
            <h4>과거진료기록</h4>
            <div></div>
          </section>
          <section className="patientreason-distance">
            <div>
              <h4>방문진료 사유</h4>
              <p>{patient.symptoms}</p>
            </div>
            <div>
              <h4>이동거리편도</h4>
              <p>{patient.distance}</p>
            </div>
          </section>
          <section className="calendar">
            <h4>캘린더</h4>
            <div>
              <MyCalendar allpatient={allpatient} />
            </div>
          </section>
          <section className="patientmoney">
            <h4>예상수가</h4>
            <div>
              <p>비슷한 유형의 환자로 예측한 수가는123,456원 예상됩니다.</p>
            </div>
          </section>
          {renderReservationButtons()}
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
            <div>블록</div>
          </section>
        </div>
      </body>
    </div>
  );
};
export default Patientdetails;
