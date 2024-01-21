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

  const getExaminationData = async () => {
    try {
      const doctorId = 3;
      const apiUrl = `http://ec2-43-201-133-67.ap-northeast-2.compute.amazonaws.com:8000/api/v1/reservations/patientList/${doctorId}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const responseData = await response.json();
        console.log("Examination data:", responseData);
        return responseData;
      } else {
        console.error("Failed to get examination data");
      }
    } catch (error) {
      console.error("Error getting examination data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const examinationData = await getExaminationData();

      const initData = examinationData.map((it) => {
        const reservationDate = new Date(it.reservation_date);
        const formattedDate = reservationDate.toISOString().split("T")[0];
        const formattedTime =
          ("0" + reservationDate.getHours()).slice(-2) +
          ":" +
          ("0" + reservationDate.getMinutes()).slice(-2);

        return {
          patientstate: it.status,
          name: it.patient.name,
          gender: it.patient.gender === "F" ? "여" : "남",
          callnumber: it.patient.number,
          height: it.patient.height,
          weight: it.patient.weight,
          id: it.patient.id,
          age: it.patient.birth, // 이 부분도 수정이 필요할 것 같습니다. 나이를 계산하는 함수를 사용해야 합니다.
          distance: "13km",
          payroute: it.payroute,
          movement: it.movement,
          date: formattedDate,
          time: formattedTime,
          symptoms: it.visit_for,
          reservationDate: it.reservation_date,
          pastrecords: it.pastrecords,
          pastreco: it.pastreco,
          payroute: "본인부담",
          movement: "치매",
        };
      });

      dispatch({ type: "INIT", data: initData });
    };
    fetchData();
  }, []);

  return (
    <PatientStateContext.Provider value={data}>
      <div className="App">
        <Home />
      </div>
    </PatientStateContext.Provider>
  );
}
export default App;
