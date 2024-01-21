import './Searchdetail.css';
import { useNavigate } from 'react-router-dom';


function Searchdetail() {

    const navigate = useNavigate(); // useNavigate 훅 사용

  const redirectToOtherPage = () => {
    navigate('/apply'); 
    scrollUp();
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    return (
        <div className='home'>
            <div className='box'>
                <img src='/doctor1.jpeg' alt="이미지 설명" />
                <div className="box-container">
                    <div className="doctorinfo">
                        <h3>김민수의사</h3>
                        <span className="hospitalname">편안한 메디컬 센터</span>
                    </div>
                    <div className="appointmentinfo">
                        <span className="address">서울특별시 4개구 </span>
                        <br></br>
                        <span className="subject">진료 과목 : 내과</span>
                    </div>
                </div>

            </div>
            <hr />
            <div className='mini'>
                <div className='minibox'>
                    <h3>진료 과목</h3>
                    <p>내과</p>
                </div>
                <div className='minibox'>
                    <h3>왕진가능시간</h3>
                    <p>평일 16:00 ~ 18:00</p>
                </div>
            </div>
            <div className='mini'>
                <div className='minibox'>
                    <h3>왕진가능지역</h3>
                    <p>서울특별시 : 중구, 명동, 을지로, 충무로</p>
                </div>
                <div className='minibox'>
                    <h3>비용 안내</h3>
                    <p>상담 시 안내</p>
                </div>
            </div><br />
            <hr />
            <div className='mini'>
                <div className='minibox'>
                    <h3>병원 위치</h3>
                    <p>서울특별시 서초구 강남대로</p>
                </div>
                <div className='minibox'>
                    <h3>병원 번호</h3>
                    <p>02-1234-1234</p>
                </div>
            </div>
            <div className='hospital_img'>
            <img src='/hospital_map.jpg' alt="이미지 설명" />
            </div> <hr />
            <div className='mini'>
                <div className='minibox'>
                    <h3>후기 99+</h3>
                    <p>의사선생님의 진료가 너무 ..</p>
                </div>
            </div>

            <button  className='reservation-button' onClick={redirectToOtherPage}>예약 신청하기</button>
        </div>
    );
}

export default Searchdetail;
