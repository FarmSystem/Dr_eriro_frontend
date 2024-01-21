import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ReservationPage.css';

function ReservationPage() {
    const [postalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleSearch = () => {
        // 검색 아이콘 클릭 시 다음 페이지로 이동
        navigate('/reservation/search'); 
    };

    return (
        <div className="address-config-container">
            <h1>주소 설정</h1>
            <div className="input-container">
                <div className="icon">📮</div>
                <div className="input-content">
                    <div className="text">우편번호</div>
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="우편번호를 입력하세요"
                    />
                </div>
            </div>
            <div className="input-container">
                <div className="icon">🏠</div>
                <div className="input-content">
                    <div className="text">주소</div>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="주소를 입력하세요"
                    />
                </div>
            </div>
            <div className="input-container">
                <div className="icon">🏠</div>
                <div className="input-content">
                    <div className="text">상세주소</div>
                    <input
                        type="text"
                        value={detailAddress}
                        onChange={(e) => setDetailAddress(e.target.value)}
                        placeholder="상세주소를 입력하세요"
                    />
                </div>
            </div>
            <button className="search-button" onClick={handleSearch}>
                <div className="icon">🔍</div>
            </button>

            <div className="iconimg">
                <div className="icon-wrapper">
                    <img src='./house_icon.png' alt="이미지 설명" />
                    <p>우리집</p>
                </div>
                <div className="icon-wrapper">
                    <img src='./map_icon.png' alt="이미지 설명" />
                    <p>기타</p>
                </div>
            </div>

        </div>
    );
}

export default ReservationPage;
