import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import Home from "./pages/Home";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
};

export const PatientStateContext = React.createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const getPaitent = () => {
    const res = [
      {
        patientstate: "예약신청",
        patientName: "김영찬",
        gender: "남",
        age: 25,
        reservationDate: "2024-01-30T11:00:00",
        symptoms: "두통",
        pastrecords: "2023-09-10 - 1차 방문진료",
        height: 170,
        weight: 70,
        Accumulatednumber: 3,
        distance: "13km",
        callnumber: "010-1234-5667",
        birthday: "2000-01-01",
        payroute: "none",
        movement: "none",
      },
      {
        patientstate: "예약신청",
        patientName: "이동호",
        gender: "남",
        age: 25,
        reservationDate: "2024-01-29T11:00:00",
        symptoms: "두두통",
        pastrecords: "2023-09-10 - 2차 방문진료",
        height: 170,
        weight: 70,
        Accumulatednumber: 3,
        distance: "13km",
        callnumber: "010-1234-5667",
        birthday: "2000-01-01",
        payroute: "none",
      },
      {
        patientstate: "예약완료",
        patientName: "가나다",
        gender: "남",
        age: 31,
        reservationDate: "2024-01-31T11:00:00",
        symptoms: "복통통",
        payroute: "전액지원",
      },
      {
        patientstate: "진료완료",
        patientName: "이지은",
        gender: "여",
        age: 30,
        reservationDate: "2023-10-15T14:30:00",
        symptoms: "복통",
      },
    ];

    const initData = res.map((it) => {
      return {
        patientstate: it.patientstate,
        name: it.patientName,
        gender: it.gender,
        age: it.age,
        date: it.reservationDate,
        symptoms: it.symptoms,
        patientName: it.patientName,
        reservationDate: it.reservationDate,
        height: it.height,
        weight: it.weight,
        Accumulatednumber: it.Accumulatednumbered,
        distance: it.distance,
        callnumber: it.callnumber,
        birthday: it.birthday,
        pastrecords: it.pastrecords,
        payroute: it.payroute,
        movement: it.movement,
      };
    });

    dispatch({ type: "INIT", data: initData });
  };
  useEffect(() => {
    getPaitent();
  }, []);

  return (
    <PatientStateContext.Provider value={data}>
      <div className="App">
        <Home />
        <></>
      </div>
    </PatientStateContext.Provider>
  );
}

export default App;
