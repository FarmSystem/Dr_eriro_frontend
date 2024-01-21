const Lastpati = (patient) => {
  return (
    <div className="Patientdetails">
      <div className="patientdetails-top">
        <div className="patientdetails-left">
          <div className="patientdetails-info">
            <div className="patientdetails-name">{patient.patientName}</div>
            <div className="pateinetdetails-spec">
              {patient.age}세 | 건강보험 | 초진 | 방문진료 | {patient.gender} |{" "}
              {patient.symptoms}
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
          <div className="patientdetails-reco">
            <div className="patientdetails-reco-list">
              <div className="patientdetails-reco-list1">
                2024-01-15
                <div style={{ color: "black", lineHeight: "30px" }}>
                  2차진료
                </div>
              </div>
              <div className="patientdetails-reco-listn">
                2024-01-13<div style={{ lineHeight: "30px" }}>1차진료</div>
              </div>
            </div>
            <div className="patientdetails-reco-detail">
              <div className="patientdetails-reco-detail-head">
                진료기록 (2024-01-15)
              </div>
              <div className="patientdetails-reco-detail-body">
                <div className="patientdetails-reco-detail-body-head">증상</div>
                <div className="patientdetails-reco-detail-body-body">
                  이틀전부터기침가래
                </div>
                <div className="patientdetails-reco-detail-body-head">상병</div>
                <div className="patientdetails-reco-detail-body-body">
                  주상병 U071 바이러스가 확인된 코로나..
                </div>
                <div className="patientdetails-reco-detail-body-head">처방</div>
                <div className="patientdetails-reco-detail-body-body">
                  AA154 초진 진찰료
                  <div>AH322 코로나19</div>
                </div>
                <div className="patientdetails-reco-detail-body-cash">
                  <div>총 진료비</div>
                  <div>
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      62,500
                    </span>{" "}
                    원
                  </div>
                </div>
                <div className="patientdetails-reco-detail-body-paymoney">
                  <div>수납금</div>
                  <div>
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      5,000
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
            <textarea placeholder="여기에 입력하세요"></textarea>
            <div
              className="patientdetails-right-head"
              style={{ border: "none" }}
            >
              상병
            </div>
            <textarea
              style={{ height: "50px" }}
              placeholder="여기에 입력하세요"
            ></textarea>
            <div
              className="patientdetails-right-head"
              style={{ border: "none" }}
            >
              처방
            </div>
            <textarea
              style={{ height: "100px" }}
              placeholder="여기에 입력하세요"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lastpati;
