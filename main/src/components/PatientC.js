import React, { useEffect, useState, useRef, useContext } from "react";

const Patient = ({ name, gender, age, date, symptoms, time }) => {
  const [selected, setSelected] = useState(false);
  const handlePostClick = () => {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2000);
  };
  return (
    <div
      className={`patient-posts ${selected ? "selected" : ""}`}
      onClick={handlePostClick}
    >
      <div className="patient-info">
        <header>
          <span>{name}님</span>
          <span style={{ fontSize: "15px", padding: "0px", margin: "0px" }}>
            {gender} {age}
          </span>
        </header>
        <div className="detail">
          <span>예약 신청일</span> <br></br>
          {date} {time} <br></br>
          <span>증상</span> <br></br>
          {symptoms}
        </div>
      </div>
    </div>
  );
  //   <div className="patient-posts">
  //     <div className="patient-info">
  //       <header>
  //         <span>{name}님</span>
  //         {gender} {age}
  //       </header>
  //       <div className="detail">
  //         <span>예약 신청일</span> <br></br>
  //         {date} <br></br>
  //         <span>증상</span> <br></br>
  //         {symptoms}
  //       </div>
  //     </div>
  //   </div>
};

export default Patient;
