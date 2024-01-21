import React from 'react'; //추가함
import { Link } from 'react-router-dom'; //추가함

const Navbar = () => {
  return (
    <div>
      <nav className="sidebar">
        <h1>Dr.이리로</h1>
        <ul>
          <li>홈페이지</li>
          <li>환자 관리</li>
          <li>프로필 관리</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
