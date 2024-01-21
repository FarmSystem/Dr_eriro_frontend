import React, { useEffect, useState, useRef, useContext } from "react";

const Patient = ({ name, gender, age, date, symptoms }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="patient-posts">
      <div className="patient-info">
        <header>
          <span>{name}님</span>
          {gender} {age}
        </header>
        <div className="detail">
          <span>예약 신청일</span> <br></br>
          {date} <br></br>
          <span>증상</span> <br></br>
          {symptoms}
        </div>
      </div>
    </div>
  );
};

export default Patient;
