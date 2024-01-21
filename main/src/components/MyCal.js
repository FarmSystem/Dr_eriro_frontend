import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = ({ allpatient }) => {
  const [value, onChange] = useState(new Date());
  const [reservedDates, setReservedDates] = useState([]);

  useEffect(() => {
    // 예약된 환자들의 날짜와 patientstate 추출
    const dates = allpatient
      .filter((patient) => patient.reservationDate && patient.patientstate)
      .map((patient) => ({
        date: new Date(patient.reservationDate),
        state: patient.patientstate,
        name: patient.patientName,
      }));

    setReservedDates(dates);
  }, [allpatient]);

  // tileContent 함수 정의
  const tileContent = ({ date, view }) => {
    // 'month' 뷰에서만 동작하도록 설정
    if (view === "month") {
      // date와 일치하는 예약된 환자가 있는지 확인
      const matchingReservation = reservedDates.find(
        (reservation) =>
          date.getFullYear() === reservation.date.getFullYear() &&
          date.getMonth() === reservation.date.getMonth() &&
          date.getDate() === reservation.date.getDate()
      );

      // 예약이 있는 경우 해당 환자의 patientstate 표시
      if (matchingReservation) {
        const textColor =
          matchingReservation.state === "예약완료" ? "blue" : "green";
        return (
          <div style={{ color: textColor, fontSize: "8px" }}>
            {matchingReservation.state} {matchingReservation.name}
          </div>
        );
      }
    }

    // 예약이 없는 경우 빈 값 반환
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar onChange={onChange} value={value} tileContent={tileContent} />
    </div>
  );
};

export default MyCalendar;
