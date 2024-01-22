import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Review.css';

function Review() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const ToOtherPage = () => {
    navigate('/');
  };

  return (
    <div className="square">
      <br />
      <h2>다음 환자들을 위한 후기를 남겨주세요</h2>
      <div className='review-container'>
        <img src='/doctor1.jpeg' alt="이미지 설명" />
        <div className="review-box-container">
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
      <h2>의사 선생님의 어떤 점이 좋으셨나요? (최대3개)</h2>
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('증상을 쉽게 설명해주셨어요.')}
            onChange={() => handleCheckboxChange('증상을 쉽게 설명해주셨어요.')}
          />
          증상을 쉽게 설명해주셨어요.
        </label><br />
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('정확하게 처방해주셨어요.')}
            onChange={() => handleCheckboxChange('정확하게 처방해주셨어요.')}
          />
          정확하게 처방해주셨어요.
        </label><br />
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('꼼꼼하게 진단해주셨어요.')}
            onChange={() => handleCheckboxChange('꼼꼼하게 진단해주셨어요.')}
          />
          꼼꼼하게 진단해주셨어요.
        </label><br />
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('진료 후 문의도 잘 받아주셔요.')}
            onChange={() => handleCheckboxChange('진료 후 문의도 잘 받아주셔요.')}
          />
          진료 후 문의도 잘 받아주셔요.
        </label><br />
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('친절하게 알려주셨어요.')}
            onChange={() => handleCheckboxChange('친절하게 알려주셨어요.')}
          />
          친절하게 알려주셨어요.
        </label><br />
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('차후에 대해 걱정해주셨어요.')}
            onChange={() => handleCheckboxChange('차후에 대해 걱정해주셨어요.')}
          />
          차후에 대해 걱정해주셨어요.
        </label>
      </div>

      <div className="review-text-container">
        <label>
          <textarea
            value={reviewText}
            onChange={handleReviewTextChange}
            placeholder="의사 선생님에 대한 전반적인 후기를 작성해주세요."
            rows={10}
            cols={100}
            style={{ resize: "vertical" }}
          />
        </label>
      </div>
      <button className='review-button' onClick={ToOtherPage}>후기 작성 완료</button>
      <br /><br />

    </div>
  );
}

export default Review;
